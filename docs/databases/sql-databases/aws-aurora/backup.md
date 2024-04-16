# Backup

[Understanding Amazon Aurora backup storage usage - Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-storage-backup.html)

Amazon Aurora maintains two types of backup: automated (continuous) backups and snapshots.

## Automated backup storage

The automated (continuous) backup for a cluster incrementally stores all database changes within a specified retention period to be able to restore to any point in time within that retention period. Retention periods can range from 1–35 days. Automated backups are incremental and charged based on the amount of storage that’s required to restore to any time within the retention period.

Aurora also provides a free amount of backup usage. This free amount of usage is equal to the latest cluster volume size (as represented by the `VolumeBytesUsed` Amazon CloudWatch metric). This amount is subtracted from the calculated automated backup usage. There is also no charge for an automated backup whose retention period is just 1 day.

For example, your automated backup has a retention period of 7 days, and you want to restore your cluster to its state from four days ago. Aurora uses the incremental data stored in the automated backup to re-create the state of the cluster at that exact time four days ago.

The automated backup stores all the required information to be able to restore the cluster at any point in time in the retention window. That means that it stores all changes during the retention window, including writes of new information or deletion of existing information. For databases where many changes occur, the size of the automated backup grows over time. After a database stops experiencing changes, you can expect the size of the automated backup to decrease, as the previously stored changes exit the retention window.

The total billed usage for the automated backup never exceeds the cumulative cluster volume size over the retention period. For example, if your retention period is 7 days, and your cluster volume was 100 GB every day, then the billed automated backup usage never exceeds 700 GB (100 GB * 7).

## Snapshot storage

DB cluster snapshots are always full backups whose size is that of the cluster volume at the time the snapshot is taken. Snapshots, either taken manually by the user or automatically by an [AWS Backups](https://docs.aws.amazon.com/aws-backup/latest/devguide/about-backup-plans.html) plan, are treated as manual snapshots. Aurora provides unlimited free storage for all snapshots that lie within the automated backup retention period. After a manual snapshot is outside the retention period, it's billed per GB-month. Any automated system snapshot is never charged unless copied and retained past the retention period.

## Amazon CloudWatch metrics for Aurora backup storage

### `BackupRetentionPeriodStorageUsed`

Represents the amount of backup storage used, in bytes, for storing automated backups at the current time.

- The value depends on the size of the cluster volume and the number of changes (writes and updates) that are made to the DB cluster during the retention period. This is because the automated backup must store all incremental changes made to the cluster to be able to restore to any point in time.
- This metric doesn't subtract the free tier of backup usage that Aurora provides.
- This metric emits a single daily data point for the automated backup usage recorded on that day.

### `SnapshotStorageUsed`

Represents the amount of backup storage used, in bytes, for storing manual snapshots beyond the automated backup's retention period.

- The value depends on the number of snapshots you keep beyond the automated backup’s retention period and the size of each snapshot.
- The size of each snapshot is the size of the cluster volume at the time you take the snapshot.
- Snapshots are full backups, not incremental.
- This metric emits one daily data point for each snapshot being charged. To retrieve your daily total snapshot usage, take the sum of this metric over a period of 1 day.

### `TotalBackupStorageBilled`

Represents the metrics for all billed backup usage, in bytes, for the given cluster:

`BackupRetentionPeriodStorageUsed + SnapshotStorageUsed - free tier`

- This metric emits one daily data point for the `BackupRetentionPeriodStorageUsed` value _minus_ the free tier of backup usage that Aurora provides. This free tier is equal to the latest recorded size of the DB cluster volume. This data point represents the actual billed usage for the automated backup.
- This metric emits individual daily data points for all of the `SnapshotStorageUsed` values.
- To retrieve your total daily billed backup usage, take the sum of this metric over a period of 1 day. This sums all of the billed snapshot usage with the billed automated backup usage, to give your total billed backup usage.

## Calculating backup storage usage

The usage for an automated backup is calculated by looking at all of the incremental records that must be stored, to be able to restore to any point in time within the retention period of the backup.

For example, you have an automated backup with retention period of 7 days. Your cluster volume size just before the retention period was 100 GB, so that’s the least amount that Aurora needs to store. Then you have the following activity for the next 7 days, where the incremental record size is the amount of storage needed to store the change records coming from your database’s writes and updates.

|Day|Incremental record size (GB)|
|---|---|
|1|10|
|2|15|
|3|25|
|4|20|
|5|10|
|6|25|
|7|30|
|Total|135|

This data means that the calculated automated backup usage for your backup is the following:

`100 GB (volume size before retention period) + 135 GB (size of incremental records) = 235 GB total backup usage`

The billed usage then subtracts the free tier of usage. Assume that the latest size of your volume is 200 GB:

`235 GB total backup usage - 200 GB (latest volume size) = 35 GB billed backup usage`

## FAQs

### When am I billed for snapshots?

You're billed for manual snapshots that are outside (older than) the retention period of the automated backup.

### What's a manual snapshot?

A manual snapshot is a snapshot to which one of the following conditions applies:

- Manually requested by you
- Taken by an automated backup service such as AWS Backup
- Copied from an automated system snapshot to preserve it outside the retention period

### What happens to my manual snapshots if I delete my DB cluster?

Manual snapshots don't expire until you delete them.

When you delete your DB cluster, the manual snapshots that you previously took continue to exist. If these snapshots previously weren't being billed because they were within the automated backup retention period, now they're not covered anymore and all start to be billed at their full size for their usage.

### How can I reduce my backup storage costs?

There are a few ways to reduce backup usage related costs:

- Delete manual snapshots that lie outside your automated backup’s retention period. This includes the snapshots you’ve taken, as well as the snapshots that your AWS Backup plan might have taken. Make sure to check your AWS Backup plan to make sure it isn't keeping snapshots outside the retention period that you don't expect.
- Evaluate your writes and updates to your database to see if you can reduce the number of changes you're making. Because our automated backup stores all incremental changes within the retention period, reducing the number of updates that you're making also reduces your automated backup charges.
- Evaluate whether reducing your automated backup’s retention period would make sense. Reducing the retention period means that the backup stores fewer days of incremental data, which could reduce the overall backup cost. However, reducing this retention period could also cause some snapshots to start being billed because they're now outside the retention period. Make sure to check all the extra snapshot costs that you might incur before deciding whether this is the right course of action for you.

### How is backup storage billed?

Backup storage is billed by the GB-month.

This means that the backup storage usage is charged as the weighted average of the usage over the given month. Here are a few examples for a 30-day month:

- Billed backup usage is 100 GB for all 30 days of the month. Your charge is the following:

    `(100 GB * 30) / 30 = 100 GB-month`

- Billed backup usage is 100 GB for the first 15 days of the month, then 0 GB for the last 15. Your charge is the following:

    `(100 GB * 15 + 0 GB * 15) / 30 = 50 GB-month`

- Billed backup usage is 50 GB for the first 10 days of the month, 100 GB for the next 10 days, then 150 GB for the final 10. Your charge is the following:

    `(50 GB * 10 + 100 GB * 10 + 150 GB * 10) / 30 = 100 GB-month`

### How does the backtrack setting for my DB cluster affect backup storage usage?

The backtrack setting for an Aurora DB cluster doesn't affect the volume of backup data for that cluster. Amazon bills the storage for backtracking data separately. For pricing information about Aurora backtracking, see the [Amazon Aurora pricing](https://aws.amazon.com/rds/aurora/pricing) page.

### How do storage costs apply to shared snapshots?

If you share a snapshot with another user, you're still the owner of that snapshot. The storage costs apply to the snapshot owner. If you delete a shared snapshot that you own, nobody can access it.

To keep access to a shared snapshot owned by someone else, you can copy that snapshot. Doing so makes you the owner of the new snapshot. Any storage costs for the copied snapshot apply to your account.
