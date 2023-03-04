# Fraud Features

| Data Features |                                       |
|---------------------------------|----------------------------------------|
| **Feature Name**                | **Description**                        |
| customer_id                     | Unique ID of the customer              |
| decision_date                   | Date as of which features were created |
| status                          | Status of Featurization                |
| data_available                  | Data Available for Featurization       |

| SMS Features |                                                                          |
|-------------------------|-----------------------------------------------|
| **Feature Name**               | **Description**                                                           |
| all_sms_count                  | Number of all SMS received                                                |
| cnt_savings_accounts           | Count of bank accounts                                                    |
| auto_debit_bounce_m1           | Flag for any auto debit bounce in last month                              |
| acc0_amt_debits_c30            | Amount in INR of debits from Primary Account in last 30 days              |
| acc0_amt_debits_p30            | Amount in INR of debits from Primary Account in the last 31 to 60 days    |
| acc0_latest_balance            | Latest balance found for Primary Account                                  |
| acc0_max_bal_3_mo             | Maximum balance for Primary Account in last 3 months                      |
| acc0_max_bal_c30               | Maximum Balance in Acc0 in the last 30 days                               |
| acc0_max_bal_p30               | Maximum Balance in Acc0 in the last 31-60 days                            |
| acc0_max_balance               | Maximum balance for Primary Account                                       |
| acc0_min_bal_3_mo             | Minimum balance for Primary Account in last 3 months                      |
| acc0_min_balance               | Minimum balance for Primary Account                                       |
| acc0_recency                   | Days since last sms from Primary Account was observed                     |
| acc0_vintage                   | Days since first sms from Primary Account was observed                    |
| calculated_income              | Days since first sms from Primary Account was observed                    |
| calculated_income_confidence   | Confidence of the income of the user calculated by FinBox                 |
| cc_utilisation                 | Credit Card Utilization Percentage                                        |
| cnt_delinquncy_loan_c30        | count of distinct loan accounts found to be delinquent in current 30 days |
| cnt_delinquncy_loan_c60        | count of distinct loan accounts found to be delinquent in current 60 days |
| cnt_overdue_senders_c60        | Count Bill Overdue Distinct Senders - Last 60 Days                        |
| cnt_overdue_sms_c30            | Count Bill Overdue SMS - Last 30 Days                                     |
| cnt_salary_txns                | Count of transactions indication salary                                   |
| credit_card_user_flag          | Flag whether customer is uses a credit card                               |
| debit_card_user_flag           | Flag whether customer has used debit card                                 |
| insurance_flag                 | Flag whether customer has insurance                                       |
| investor_flag                  | Flag whether customer is an investor                                      |
| max_dpd_acc1                   | Max DPD in primary loan account                                           |
| postpaid_flag                  | Flag for whether device has a postpaid sim                                |
| prepaid_flag                   | Flag for whether device has a prepaid sim                                 |
| salaried_flag                  | Flag for whether a customer is salaried                                   |
| sms_period                     | Number of days between first and last observed SMS                        |
| sms_vintage                    | Days since first SMS was observed                                         |
| transactional_sms_count        | Available number of transactional SMS                                     |
| cc1_credit_limit               | Total Credit Limit for Credit card-1                                      |
| cc1_bank                       | Credit card-1 provider name                                               |
| cnt_ewallets_used              | Distinct count of ewallets used                                           |
| emi_loan_acc1                  | EMI of Primary Loan Account                                               |
| acc0_acc_number                | Account number of Primary Account                                         |
| acc0_sms_count                 | Total number of messages found for acocunt0                               |
| cnt_loan_approved_c30          | Number of loans approved in the last 30 days                              |
| cnt_loan_rejected_c30          | Number of loans rejected in the last 30 days                              |
| amt_credit_txn_m1              | Amount in INR of credit transactions in the last month                    |
| amt_credit_txn_m2              | Amount in INR of credit transactions in the second last month             |
| amt_credit_txn_m3              | Amount in INR of credit transactions in the third last month              |
| cnt_credit_txn_m1              | Count of credit transactions in the last month                            |
| cnt_credit_txn_m2              | Count of credit transactions in the second last month                     |
| cnt_credit_txn_m3              | Count of credit transactions in the third last month                      |
| cnt_debit_txn_m1               | Count of debit transactions in the last month                             |
| cnt_debit_txn_m2               | Count of debit transactions in the second last month                      |
| cnt_debit_txn_m3               | Count of debit transactions in the third last month                       |
| amt_debit_txn_m1               | Amount in INR of debit transactions in the last month                     |
| amt_debit_txn_m2               | Amount in INR of debit transactions in the second last month              |
| amt_debit_txn_m3               | Amount in INR of debit transactions in the third last month               |

| Fraud Features |                                                                   |
|--------------------------|----------------------------------------------|
| **Feature Name**                 | **Description**                                                    |
| **indevice_match_flag**          | Evidence if the device belogs to this user or not                  |
| concetration_ip_address          | Number of different users using the IP address for application     |
| concetration_first_android_id    | Number of different users using the same device for application    |
| concetration_first_wifi_ssid     | Number of different users using the same wifi for application      |
| concetration_first_sms_time      | Number of different users using the first SMS time for application |
| concentration_device             | Number of different users applying from the same device            |
| concetration_location            | Number of different users applying from same location              |
| concetration_sms_data            | Number of different users using the SMS data for application       |
| cnt_fraud_assists_apps           | Count of fake GPS apps, SMS editor apps etc                        |
| cnt_apps_data_editor             | Count of data editor apps                                          |
| cnt_apps_root_c30                | Count of rooting apps installed in last 30 days                    |
| cnt_apps_backup_c30              | Count of backup apps installed in last 30 days                     |
| cnt_apps_fake_gps_c30            | Count of fake gps apps installed in last 30 days                   |
| blacklisted_location             | Flag if user was in blacklisted area                               |
| cnt_loan_approval_same_client    | Count of loan approval from the same client                        |

| FinBox Features |                                                         |
|--------------------------|----------------------------------------------|
| **Feature Name**                  | **Description**                                          |
| fis_v1                            | FinBox Credit Score (Version 1)                          |
| fis_v2                            | FinBox Credit Score (Version 2)                          |
| fis_confidence                    | Confidence on Credit Scores and Affordability Calculated |
| fis_affordability_v1              | Monthly EMI Affordability Calculated - Based on SMS      |
| fis_recommended_due_date          | Recommended Due Date based on Balance Availability       |
| digital_savviness                 | Score indicating digital savviness of the user           |

| Device Features |                                                           |
|-------------------------|-----------------------------------------------|
| **Feature Name**                  | **Description**                                            |
| mobile_model                      | User's mobile phone model from latest mobile phone        |
| brand                             | User's mobile phone brand from latest mobile phone        |
| available_internal_storage        | Available internal storage (MB) in latest mobile phone     |
| total_ram                         | Total RAM (in MB) in latest mobile phone                   |
| sdk_device_last_active            | Timestamp of the most recent SDK activity                  |
| sdk_device_first_active           | Timestamp of SDK first activation on devicer               |
| sms_permission_flag               | Flag of whether users ever gave the SMS Permission         |
| location_permission_flag          | Flag of whether users ever gave the Location Permission    |
| phone_state_permission_flag       | Flag of whether users ever gave the Phone_state Permission |
| unique_devices                    | Number of unique mobile phones where app was installed     |

| Location Features |                                               |
|----------------------------|--------------------------------------------|
| **Feature Name**                    | **Description**                                |
| latest_location_latitude            | Latitude of the latest accurate location data  |
| latest_location_longitude           | Longitude of the latest accurate location data |

| Apps Features |                                                                       |
|--------------------------|----------------------------------------------|
| **Feature Name**                | **Description**                                                        |
| cnt_apps                        | Total number of Apps found                                             |
| cnt_paid_apps                   | Total number of apps purchased from Google Play Store                  |
| cnt_apps_genre_entertainment    | Total Number of Apps categorised as Entertainment on Google Play Store |
| cnt_apps_genre_finance          | Total Number of Apps categorised as Finance on Google Play Store       |
| cnt_apps_genre_social           | Total Number of Apps categorised as Social on Google Play Store        |
| cnt_apps_genre_business         | Total Number of Apps categorised as Business on Google Play Store      |
| cnt_apps_genre_communication    | Total Number of Apps categorised as Communication on Google Play Store |
| days_since_first_install        | Number of days since the first Play-store Apps was installed           |

| Contact Features |                                        |
|------------------------------|------------------------------------------|
| **Feature Name**                   | **Description**                         |
| cnt_contacts                       | Count of Total Contacts                 |
| cnt_contacts_with_email            | Count of Contacts having Email Address  |
| cnt_contacts_c30                   | Count of Contacts added in last 30 days |
| cnt_contacts_c60                   | Count of Contacts added in last 60 days |

| Call Log Features |                                      |
|-------------------------------|-----------------------------------------|
| **Feature Name**                    | **Description**                       |
| cnt_calls_c30                       | Total Calls Last 30 Days              |
| cnt_missed_calls_c30                | Total Missed Calls Last 30 Days       |
| cnt_incoming_calls_c30              | Total Incoming Calls Last 30 Days     |
| cnt_outgoing_calls_c30              | Total Outgoing Calls Last 30 Days     |
| minutes_incoming_calls_c30          | Total Incoming Minutes - Last 30 Days |
| minutes_outgoing_calls_c30          | Total Outgoing Minutes - Last 30 Days |
| cnt_missed_calls_c60                | Total Missed Calls Last 60 Days       |
| cnt_incoming_calls_c60              | Total Incoming Calls Last 60 Days     |
| cnt_outgoing_calls_c60              | Total Outgoing Calls Last 60 Days     |
| cnt_unique_contacts_c30             | Unique Numbers Contacted Last 30 Days |

| **Category**         | **Feature #** |
|----------------------|----------------|
| BankAccount          | 91             |
| Ewallet              | 57             |
| Loan                 | 53             |
| Apps                 | 52             |
| Telecom              | 49             |
| Utilities            | 44             |
| Expense              | 43             |
| Income               | 22             |
| Balance              | 19             |
| Flag                 | 18             |
| Credit card          | 17             |
| Location             | 14             |
| Investment           | 12             |
| Imputed Bank Account | 11             |
| Device               | 10             |
| Score                | 7              |
| Metadata             | 5              |
| Null Reason          | 4              |
| User Profile         | 3              |
| Aggregate            | 2              |
| Fraud                | 2              |

## Apps , SMS and Device Calculated Features (Excluding Important)

This sheet contains all features that we calculate from Raw unstructured Data present in Device

| **Sno** | **Category**         | **Features**                                 | **Description**                                                                                    | **Run-time Permission** |
|-----|----------|---------------------------------|---------------|----------|
| 1       | Flag                 | auto_debit_bounce_m0                         | Flag for any auto debit bounce in current month                                                    | sms                     |
| 2       | Flag                 | auto_debit_bounce_m2                         | Flag for any auto debit bounce in second last month                                                | sms                     |
| 3       | Flag                 | auto_debit_bounce_m3                         | Flag for any auto debit bounce in third last month                                                 | sms                     |
| 4       | Flag                 | cheque_bounce_m0                             | Flag if any cheque bounce in current month                                                         | sms                     |
| 5       | Flag                 | cheque_bounce_m1                             | Flag if any cheque bounce in last month                                                            | sms                     |
| 6       | Flag                 | cheque_bounce_m2                             | Flag if any cheque bounce in second last month                                                     | sms                     |
| 7       | Flag                 | cheque_bounce_m3                             | Flag if any cheque bounce in third last month                                                      | sms                     |
| 8       | Utilities            | cnt_delinquency_broadband                    | Number of delinquency in broadband accounts                                                        | sms                     |
| 9       | Utilities            | cnt_delinquency_dth                          | Number of delinquency in DTH accounts                                                              | sms                     |
| 10      | Utilities            | cnt_delinquency_electricity                  | Number of delinquency in Electricity accounts                                                      | sms                     |
| 11      | Flag                 | ecs_bounce_m0                                | Flag for any ECS bounce in current month                                                           | sms                     |
| 12      | Flag                 | ecs_bounce_m1                                | Flag for any ECS bounce in last month                                                              | sms                     |
| 13      | Flag                 | ecs_bounce_m2                                | Flag for any ECS bounce in the second last month                                                   | sms                     |
| 14      | Flag                 | ecs_bounce_m3                                | Flag for any ECS bounce in the third last month                                                    | sms                     |
| 15      | Flag                 | si_bounce_m0                                 | Flag for any Standing instruction bounce in current month                                          | sms                     |
| 16      | Flag                 | si_bounce_m1                                 | Flag for any Standing instruction bounce in last month                                             | sms                     |
| 17      | Flag                 | si_bounce_m2                                 | Flag for any Standing instruction bounce in the second last month                                  | sms                     |
| 18      | Flag                 | si_bounce_m3                                 | Flag for any Standing instruction bounce in the third last month                                   | sms                     |
| 19      | Investment           | amt_fd_accounts_c180                         | Amount paid in FD accounts in the last 180 days                                                    | sms                     |
| 20      | Investment           | amt_insurance_accounts_c180                  | Amount paid in insurance accounts in the last 180 days                                             | sms                     |
| 21      | Investment           | amt_mf_accounts_c180                         | Amount paid in mutual fund accounts in the last 180 days                                           | sms                     |
| 22      | Investment           | amt_rd_accounts_c180                         | Amount paid in Recurring Deposit accounts in the last 180 days                                     | sms                     |
| 23      | Investment           | cnt_fd_accounts                              | Number of FD accounts                                                                              | sms                     |
| 24      | Investment           | cnt_insurance_accounts                       | Number of insurance accounts                                                                       | sms                     |
| 25      | Investment           | cnt_rd_accounts                              | Number of recurring transaction accounts                                                           | sms                     |
| 26      | Utilities            | equity_flag                                  | Flag whether customer has traded in stocks                                                         | sms                     |
| 27      | Investment           | equity_trx_recency                           | Number of days since the user received last SMS from equity provider                               | sms                     |
| 28      | Expense              | expense_data_vintage                         | Vintage of bank debit messages                                                                     | sms                     |
| 29      | Utilities            | fd_flag                                      | Flag whether customer has used fixed deposit                                                       | sms                     |
| 30      | Investment           | fd_trx_recency                               | Number of days since the user received last SMS from FD bank account                               | sms                     |
| 31      | Investment           | insurance_trx_recency                        | Number of days since the user received last SMS from Insurance account                             | sms                     |
| 32      | Utilities            | mf_flag                                      | Flag whether customer has used mutual funds                                                        | sms                     |
| 33      | Investment           | mf_trx_recency                               | Number of days since the user received last SMS from Mutual Fund account                           | sms                     |
| 34      | Utilities            | po_flag                                      | Flag for whether customer has used post office deposit                                             | sms                     |
| 35      | Investment           | po_trx_recency                               | Days since last trxn sms from post office                                                          | sms                     |
| 36      | Utilities            | rd_flag                                      | Flag for whether customer has a recurring deposit account                                          | sms                     |
| 37      | Utilities            | rd_trx_recency                               | Number of days since the user received last SMS from Recurring deposit bank account                | sms                     |
| 38      | Ewallet              | amazonpay_recency                            | Number of days since the user received last SMS from Amazon Pay                                    | sms                     |
| 39      | Ewallet              | amazonpay_user_flag                          | Amazon Pay user flag                                                                               | sms                     |
| 40      | Ewallet              | amazonpay_vintage_sms                        | Number of days since the user received first SMS from Amazon Pay                                   | sms                     |
| 41      | Ewallet              | amt_paytm_ecom_m1                            | Amount in INR of Paytm Mall purchases in the last month                                            | sms                     |
| 42      | Ewallet              | amt_paytm_ecom_m2                            | Amount in INR of Paytm Mall purchases in the second last month                                     | sms                     |
| 43      | Ewallet              | amt_paytm_ecom_m3                            | Amount in INR of Paytm Mall purchases in the third last month                                      | sms                     |
| 44      | Ewallet              | amt_paytm_p2p_m1                             | Amount debited through transfers in paytm in last calendar month                                   | sms                     |
| 45      | Ewallet              | amt_paytm_p2p_m2                             | Amount debited through transfers in paytm in second-last calendar month                            | sms                     |
| 46      | Ewallet              | amt_paytm_p2p_m3                             | Amount debited through transfers in paytm in third-last calendar month                             | sms                     |
| 47      | Ewallet              | amt_paytm_txn_m1                             | Amount in INR of Paytm transactions in the last month                                              | sms                     |
| 48      | Ewallet              | amt_paytm_txn_m2                             | Amount in INR of Paytm transactions in the second last month                                       | sms                     |
| 49      | Ewallet              | amt_paytm_txn_m3                             | Amount in INR of Paytm transactions in the third last month                                        | sms                     |
| 50      | Ewallet              | amt_paytm_wallet_recharge_m1                 | Amount credited in paytm wallet in the last calendar month                                         | sms                     |
| 51      | Ewallet              | amt_paytm_wallet_recharge_m2                 | Amount credited in paytm wallet in the second-last calendar month                                  | sms                     |
| 52      | Ewallet              | amt_paytm_wallet_recharge_m3                 | Amount credited in paytm wallet in the third-last calendar month                                   | sms                     |
| 53      | Ewallet              | amt_wallet_credits                           | Amount of INR of credits in all ewallets                                                           | sms                     |
| 54      | Ewallet              | amt_wallet_debits                            | Amount of INR of debits from all ewallets                                                          | sms                     |
| 55      | Ewallet              | amt_wallet_txn_m1                            | Amount of INR of debits from all ewallets in last month                                            | sms                     |
| 56      | Ewallet              | amt_wallet_txn_m2                            | Amount of INR of debits from all ewallets in second last month                                     | sms                     |
| 57      | Ewallet              | amt_wallet_txn_m3                            | Amount of INR of debits from all ewallets in third last month                                      | sms                     |
| 58      | Ewallet              | cnt_ewallet_txns_c90                         | Count of all (both credit and debit) ewallet transactions in the last 90 days                      | sms                     |
| 59      | Ewallet              | cnt_paytm_ecom_m1                            | Count of Paytm Mall purchases in the last month                                                    | sms                     |
| 60      | Ewallet              | cnt_paytm_ecom_m2                            | Count of Paytm Mall purchases in the second last month                                             | sms                     |
| 61      | Ewallet              | cnt_paytm_ecom_m3                            | Count of Paytm Mall purchases in the third last month                                              | sms                     |
| 62      | Ewallet              | cnt_paytm_p2p_m1                             | Number of debits through transfer from Paytm in last calendar month                                | sms                     |
| 63      | Ewallet              | cnt_paytm_p2p_m2                             | Number of debits through transfer from Paytm in second-last calendar month                         | sms                     |
| 64      | Ewallet              | cnt_paytm_p2p_m3                             | Number of debits through transfer from Paytm in third-last calendar month                          | sms                     |
| 65      | Ewallet              | cnt_paytm_txn_m1                             | Count of Paytm debit transactions in the last month                                                | sms                     |
| 66      | Ewallet              | cnt_paytm_txn_m2                             | Count of Paytm debit transactions in the second last month                                         | sms                     |
| 67      | Ewallet              | cnt_paytm_txn_m3                             | Count of Paytm debit transactions in the third last month                                          | sms                     |
| 68      | Ewallet              | cnt_paytm_wallet_recharge_m1                 | Number of debits in Paytm in the last calendar month                                               | sms                     |
| 69      | Ewallet              | cnt_paytm_wallet_recharge_m2                 | Number of debits in Paytm in the second-last calendar month                                        | sms                     |
| 70      | Ewallet              | cnt_paytm_wallet_recharge_m3                 | Number of debits in Paytm in the third-last calendar month                                         | sms                     |
| 71      | Ewallet              | cnt_unique_wallets_used                      | Total number of unique wallet used                                                                 | sms                     |
| 72      | Ewallet              | cnt_wallet_credits                           | Count of credit transcations in all ewallets                                                       | sms                     |
| 73      | Ewallet              | cnt_wallet_debits                            | Count of debit transcations in all ewallets                                                        | sms                     |
| 74      | Ewallet              | cnt_wallet_txn_m1                            | Count of debit transcations in all ewallets in last month                                          | sms                     |
| 75      | Ewallet              | cnt_wallet_txn_m2                            | Count of debit transcations in all ewallets in second last month                                   | sms                     |
| 76      | Ewallet              | cnt_wallet_txn_m3                            | Count of debit transcations in all ewallets in third last month                                    | sms                     |
| 77      | Ewallet              | freecharge_recency                           | Number of days since the user received last SMS from Freecharge                                    | sms                     |
| 78      | Ewallet              | freecharge_user_flag                         | Flag for Freeecharge users                                                                         | sms                     |
| 79      | Ewallet              | freecharge_vintage_sms                       | Number of days since the user received first SMS from Freecharge                                   | sms                     |
| 80      | Ewallet              | jio_recency                                  | Recency for Jio messages                                                                           | sms                     |
| 81      | Ewallet              | jio_user_flag                                | Flag for Jio user                                                                                  | sms                     |
| 82      | Ewallet              | jio_vintage_sms                              | Vintage for Jio messages                                                                           | sms                     |
| 83      | Ewallet              | mobikwik_recency                             | Number of days since last sms from Mobikwik                                                        | sms                     |
| 84      | Ewallet              | mobikwik_user_flag                           | Mobikwik user flag                                                                                 | sms                     |
| 85      | Ewallet              | mobikwik_vintage_sms                         | Number of days since first sms from Mobikwik                                                       | sms                     |
| 86      | Ewallet              | paytm_recency                                | Paytm recency                                                                                      | sms                     |
| 87      | Ewallet              | paytm_user_flag                              | Paytm user flag                                                                                    | sms                     |
| 88      | Ewallet              | paytm_vintage_sms                            | Paytm vintage                                                                                      | sms                     |
| 89      | Ewallet              | phonepe_recency                              | Number of days since last sms from PhonePe                                                         | sms                     |
| 90      | Ewallet              | phonepe_user_flag                            | Phonepe user flag                                                                                  | sms                     |
| 91      | Ewallet              | phonepe_vintage_sms                          | Number of days since first sms from PhonePe                                                        | sms                     |
| 92      | Ewallet              | wallet_recency                               | Wallet recency in days                                                                             | sms                     |
| 93      | Ewallet              | wallet_user_flag                             | Flag for Wallet account                                                                            | sms                     |
| 94      | Ewallet              | wallet_vintage_sms                           | Wallet Vintage in days                                                                             | sms                     |
| 95      | Metadata             | num_times_sdk_device_active                  | Number of times SDK device was active                                                              | N/A                     |
| 96      | Device               | os_version                                   | Operating System version from latest mobile phone                                                  | device                  |
| 97      | Device               | network_type                                 | Mobile data network type - 2G, 3G, 4G from latest mobile phone                                     | device                  |
| 98      | Device               | sim_1_operator_name                         | Operator of Sim 1 from latest mobile phone                                                         | phone_state             |
| 99      | Device               | sim_2_operator_name                         | Operator of Sim 2 from latest mobile phone                                                         | phone_state             |
| 100     | Device               | dual_sim                                     | Flag whether user has 2 active SIM cards in latest mobile phone                                    | device                  |
| 101     | Device               | total_internal_storage                       | Internal storage capacity (MB) in latest mobile phone                                              | device                  |
| 102     | Device               | available_external_storage                   | Available external storage (MB) in latest mobile phone                                             | device                  |
| 103     | Device               | total_external_storage                       | Total external storage capacity (in MB) in latest mobile phone                                     | device                  |
| 104     | Device               | available_ram                                | Available RAM (in MB) in latest mobile phone                                                       | device                  |
| 105     | Device               | display_language                             | Display language of the device in latest mobile phone                                              | device                  |
| 106     | Metadata             | sms_recency                                  | Days since last SMS was observed                                                                   | sms                     |
| 107     | Expense              | amt_cash_wdl_m0                              | Amount in INR of cash withdrawals in the current month                                             | sms                     |
| 108     | Expense              | amt_cash_wdl_m1                              | Amount in INR of cash withdrawals in the last month                                                | sms                     |
| 109     | Expense              | amt_cash_wdl_m2                              | Amount in INR of cash withdrawals in the second last month                                         | sms                     |
| 110     | Expense              | amt_cash_wdl_m3                              | Amount in INR of cash withdrawals in the third last month                                          | sms                     |
| 111     | Credit card          | amt_cc_txn_m0                                | Amount in INR of debits from credit card in the current month                                      | sms                     |
| 112     | Credit card          | amt_cc_txn_m1                                | Amount in INR of debits from credit card in the last month                                         | sms                     |
| 113     | Credit card          | amt_cc_txn_m2                                | Amount in INR of debits from credit card in second the last month                                  | sms                     |
| 114     | Credit card          | amt_cc_txn_m3                                | Amount in INR of debits from credit card in the third-last month                                   | sms                     |
| 115     | Income               | amt_credit_txn_m0                            | Amount in INR of credit transactions in the current month                                          | sms                     |
| 116     | Expense              | amt_dc_txn_m0                                | Amount in INR of debits from debit card in the current month                                       | sms                     |
| 117     | Expense              | amt_dc_txn_m1                                | Amount in INR of debits from debit card in the last month                                          | sms                     |
| 118     | Expense              | amt_dc_txn_m2                                | Amount in INR of debits from debit card in second the last month                                   | sms                     |
| 119     | Expense              | amt_dc_txn_m3                                | Total amount of debit card transactions in third last month                                        | sms                     |
| 120     | Expense              | amt_debit_self_transf_m0                     | Amount in INR of debit transfers to another self account in current month                          | sms                     |
| 121     | Expense              | amt_debit_self_transf_m1                     | Amount in INR of debit transfers to another self account in last month                             | sms                     |
| 122     | Expense              | amt_debit_self_transf_m2                     | Amount of self transfer debit transaction in second last month                                     | sms                     |
| 123     | Expense              | amt_debit_self_transf_m3                     | Amount of self transfer debit transaction in third last month                                      | sms                     |
| 124     | Expense              | amt_debit_txn_m0                             | Amount in INR of debit transactions in the current month                                           | sms                     |
| 125     | Expense              | amt_debit_wo_transf_m0                       | Amount in INR of debit transactions in the current month which are not account transfers           | sms                     |
| 126     | Expense              | amt_debit_wo_transf_m1                       | Amount in INR of debit transactions in the last month which are not account transfers              | sms                     |
| 127     | Expense              | amt_debit_wo_transf_m2                       | Amount in INR of debit transactions in the second last month which are not account transfers       | sms                     |
| 128     | Expense              | amt_debit_wo_transf_m3                       | Amount in INR of debit transactions in the third last month which are not account transfers        | sms                     |
| 129     | Expense              | amt_transfer_out_m0                          | Amount in INR of debit transactions transferred to another account in the current month            | sms                     |
| 130     | Expense              | amt_transfer_out_m1                          | Amount in INR of debit transactions transferred to another account in the last month               | sms                     |
| 131     | Expense              | amt_transfer_out_m2                          | Amount in INR of debit transactions transferred to another account in the second last month        | sms                     |
| 132     | Expense              | amt_transfer_out_m3                          | Amount in INR of debit transactions transferred to another account in the third last month         | sms                     |
| 133     | Income               | calculated_salary                            | Estimated salary                                                                                   | sms                     |
| 134     | Expense              | cnt_cash_wdl_m0                              | Number of cash withdrawals in the current month                                                    | sms                     |
| 135     | Expense              | cnt_cash_wdl_m1                              | Number of cash withdrawals in the last month                                                       | sms                     |
| 136     | Expense              | cnt_cash_wdl_m2                              | Number of cash withdrawals in the 2nd last month                                                   | sms                     |
| 137     | Expense              | cnt_cash_wdl_m3                              | Number of cash withdrawals in the 3rd last month                                                   | sms                     |
| 138     | Credit card          | cnt_cc_txn_m0                                | Total number of debit transactions done from credit card in current month                          | sms                     |
| 139     | Credit card          | cnt_cc_txn_m1                                | Total number of debit transactions done from credit card in last month                             | sms                     |
| 140     | Credit card          | cnt_cc_txn_m2                                | Total number of debit transactions done from credit card in second last month                      | sms                     |
| 141     | Credit card          | cnt_cc_txn_m3                                | Number of credit card transactions in the third last month                                         | sms                     |
| 142     | Income               | cnt_credit_txn_m0                            | Count of credit transactions in the currenct month                                                 | sms                     |
| 143     | Expense              | cnt_dc_txn_m0                                | Total number of debit transactions done from debit card in current month                           | sms                     |
| 144     | Expense              | cnt_dc_txn_m1                                | Total number of debit transactions done from debit card in last month                              | sms                     |
| 145     | Expense              | cnt_dc_txn_m2                                | Total number of debit transactions done from debit card in secondlast month                        | sms                     |
| 146     | Expense              | cnt_dc_txn_m3                                | Number of debit card transactions in third last month                                              | sms                     |
| 147     | Expense              | cnt_debit_self_transf_m0                     | Total number of debit transfers to another self account in current month                           | sms                     |
| 148     | Expense              | cnt_debit_self_transf_m1                     | Total number of debit transfers to another self account in last month                              | sms                     |
| 149     | Expense              | cnt_debit_self_transf_m2                     | Number of self transfer debit transaction in second last month                                     | sms                     |
| 150     | Expense              | cnt_debit_self_transf_m3                     | Number of self transfer debit transaction in third last month                                      | sms                     |
| 151     | Expense              | cnt_debit_txn_m0                             | Count of debit transactions in the current month                                                   | sms                     |
| 152     | Expense              | cnt_transfer_out_m0                          | Total number of debit transactions which are account transfers in current month                    | sms                     |
| 153     | Expense              | cnt_transfer_out_m1                          | Total number of debit transactions which are account transfers in last month                       | sms                     |
| 154     | Expense              | cnt_transfer_out_m2                          | Total number of debit transactions which are account transfers in second last month                | sms                     |
| 155     | Expense              | cnt_transfer_out_m3                          | Total number of debit transactions which are account transfers in third last month                 | sms                     |
| 156     | Expense              | max_amt_debit_txn_m0                         | Maximum amount of debit transaction in the current month                                           | sms                     |
| 157     | Expense              | max_amt_debit_txn_m1                         | Maximum amount of debit transaction in the last month                                              | sms                     |
| 158     | Expense              | max_amt_debit_txn_m2                         | Maximum amount of debit transaction in the second last month                                       | sms                     |
| 159     | Expense              | max_amt_debit_txn_m3                         | Maximum amount of debit transaction in the third last month                                        | sms                     |
| 160     | Income               | max_credit_amount_m0                         | Maximum amount credit in a single transaction in the current month                                 | sms                     |
| 161     | Income               | max_credit_amount_m1                         | Maximum amount credit in a single transaction in the last month                                    | sms                     |
| 162     | Income               | max_credit_amount_m2                         | Maximum amount credit in a single transaction in the second last month                             | sms                     |
| 163     | Income               | max_credit_amount_m3                         | Maximum amount credit in a single transaction in the third last month                              | sms                     |
| 164     | Metadata             | num_months_txn_data                          | Number of months for which transaction data is available                                           | sms                     |
| 165     | Metadata             | num_total_credit_sms                         | Total number of credit messages                                                                    | sms                     |
| 166     | Metadata             | num_total_debit_sms                          | Total number of debit messages                                                                     | sms                     |
| 167     | Income               | other_income_m1                              | Income besides salary in last month                                                                | sms                     |
| 168     | Income               | other_income_m2                              | Income besides salary in second last month                                                         | sms                     |
| 169     | Income               | other_income_m3                              | Income besides salary in third last month                                                          | sms                     |
| 170     | BankAccount          | primary_debit_acc_id                         | Bank account which has the most debit transactions                                                 | sms                     |
| 171     | BankAccount          | primary_usage_acc_id                         | Bank account which has the most number of transactions                                             | sms                     |
| 172     | Income               | salary_m1                                    | Salary received in the last month taking into account missing transaction/balance sms              | sms                     |
| 173     | Income               | salary_m2                                    | Salary received in the second last month taking into account missing transaction/balance sms       | sms                     |
| 174     | Income               | salary_m3                                    | Salary received in the third last month taking into account missing transaction/balance sms        | sms                     |
| 175     | Income               | salary_recency                               | Recency of salary transaction messages                                                             | sms                     |
| 176     | Income               | salary_source                                | Source of the salary                                                                               | sms                     |
| 177     | Income               | total_income_m0                              | Total income in the current month                                                                  | sms                     |
| 178     | Income               | total_income_m1                              | Total income in the last month                                                                     | sms                     |
| 179     | Income               | total_income_m2                              | Total income in the second last month                                                              | sms                     |
| 180     | Income               | total_income_m3                              | Total income in the third last month                                                               | sms                     |
| 181     | Flag                 | upi_user_flag                                | Flag for UPI account                                                                               | sms                     |
| 182     | Telecom              | amt_postpaid_bill_m0                         | Total amount of postpaid bill in the current month                                                 | sms                     |
| 183     | Telecom              | amt_postpaid_bill_m1                         | Total amount of postpaid bill in the last month                                                    | sms                     |
| 184     | Telecom              | amt_postpaid_bill_m2                         | Total amount of postpaid bill in the second last month                                             | sms                     |
| 185     | Telecom              | amt_postpaid_bill_m3                         | Total amount of postpaid bill in the third last month                                              | sms                     |
| 186     | Telecom              | amt_postpaid_bill_m4                         | Total amount of postpaid bill in the fourth last month                                             | sms                     |
| 187     | Telecom              | amt_postpaid_bill_m5                         | Total amount of postpaid bill in the fifth last month                                              | sms                     |
| 188     | Telecom              | amt_postpaid_bill_m6                         | Total amount of postpaid bill in the sixth last month                                              | sms                     |
| 189     | Telecom              | av_amt_topup_m1                              | Average topup amount in the last month                                                             | sms                     |
| 190     | Telecom              | av_amt_topup_m2                              | Average topup amount in the second last month                                                      | sms                     |
| 191     | Telecom              | av_amt_topup_m3                              | Average topup amount in the third last month                                                       | sms                     |
| 192     | Telecom              | avg_bal_at_topup_m1                          | Average balance at time of mobile topup in last caledar month                                      | sms                     |
| 193     | Telecom              | avg_bal_at_topup_m2                          | Average balance at time of mobile topup in second-last caledar month                               | sms                     |
| 194     | Telecom              | avg_bal_at_topup_m3                          | Average balance at time of mobile topup in third-last caledar month                                | sms                     |
| 195     | Telecom              | avg_postpaid_bill_3m                         | Average amount of postpaid bill in last 3 months                                                   | sms                     |
| 196     | Telecom              | avg_postpaid_bill_4_6m                      | Average amount of postpaid bill in last 4 to 6 months                                              | sms                     |
| 197     | Utilities            | bill_broadband_m0                            | Total bill amount of broadband in the current month                                                | sms                     |
| 198     | Utilities            | bill_broadband_m1                            | Total bill amount of broadband in the last month                                                   | sms                     |
| 199     | Utilities            | bill_broadband_m2                            | Total bill amount of broadband in the second last month                                            | sms                     |
| 200     | Utilities            | bill_broadband_m3                            | Total bill amount of broadband in the third last month                                             | sms                     |
| 201     | Utilities            | bill_dth_m0                                  | Total bill amount of DTH in the current month                                                      | sms                     |
| 202     | Utilities            | bill_dth_m1                                  | Total bill amount of DTH in the last month                                                         | sms                     |
| 203     | Utilities            | bill_dth_m2                                  | Total bill amount of DTH in the second last month                                                  | sms                     |
| 204     | Utilities            | bill_dth_m3                                  | Total bill amount of DTH in the third last month                                                   | sms                     |
| 205     | Utilities            | bill_electricity_m0                          | Total bill amount of electricity in the current month                                              | sms                     |
| 206     | Utilities            | bill_electricity_m1                          | Total bill amount of electricity in the last month                                                 | sms                     |
| 207     | Utilities            | bill_electricity_m2                          | Total bill amount of electricity in the second last month                                          | sms                     |
| 208     | Utilities            | bill_electricity_m3                          | Total bill amount of electricity in the third last month                                           | sms                     |
| 209     | Utilities            | bill_lpg_m0                                  | Total bill amount of LPG in the current month                                                      | sms                     |
| 210     | Utilities            | bill_lpg_m1                                  | Total bill amount of LPG in the last month                                                         | sms                     |
| 211     | Utilities            | bill_lpg_m2                                  | Total bill amount of LPG in the second last month                                                  | sms                     |
| 212     | Utilities            | bill_lpg_m3                                  | Total bill amount of LPG in the third last month                                                   | sms                     |
| 213     | Utilities            | broadband_flag                               | Flag whether customer uses broadband                                                               | sms                     |
| 214     | Utilities            | broadband_provider                           | Name of the broadband service provider                                                             | sms                     |
| 215     | Utilities            | broadband_recency                            | Number of days since the user received last SMS from Broadband service provider                    | sms                     |
| 216     | Utilities            | broadband_vintage                            | Number of days since the user received first SMS from Broadband service provider                   | sms                     |
| 217     | Telecom              | cnt_phone_num_c30                            | Number of unique phone-numbers used in last 30 days                                                | sms                     |
| 218     | Telecom              | cnt_phone_num_c60                            | Number of unique phone-numbers used in last 60 days                                                | sms                     |
| 219     | Telecom              | cnt_phone_num_c90                            | Number of unique phone-numbers used in last 90 days                                                | sms                     |
| 220     | Telecom              | cnt_postpaid_bill_m0                         | Number of postpaid bill in the current month                                                       | sms                     |
| 221     | Telecom              | cnt_postpaid_bill_m1                         | Number of postpaid bill in the last month                                                          | sms                     |
| 222     | Telecom              | cnt_postpaid_bill_m2                         | Number of postpaid bill in the second last month                                                   | sms                     |
| 223     | Telecom              | cnt_postpaid_bill_m3                         | Number of postpaid bill in the third last month                                                    | sms                     |
| 224     | Telecom              | cnt_postpaid_bill_m4                         | Number of postpaid bill in the fourth last month                                                   | sms                     |
| 225     | Telecom              | cnt_postpaid_bill_m5                         | Number of postpaid bill in the fifth last month                                                    | sms                     |
| 226     | Telecom              | cnt_postpaid_bill_m6                         | Number of postpaid bill in the sixth last month                                                    | sms                     |
| 227     | Telecom              | cnt_postpaid_bill_overdue_c180               | Number of time postpaid bill was overdue in last 180 days                                          | sms                     |
| 228     | Telecom              | cnt_topup_m1                                 | Count of mobile recharges in the last month                                                        | sms                     |
| 229     | Telecom              | cnt_topup_m2                                 | Count of mobile recharges in the second last month                                                 | sms                     |
| 230     | Telecom              | cnt_topup_m3                                 | Count of mobile recharges in the third last month                                                  | sms                     |
| 231     | Utilities            | dth_flag                                     | Flag whether customer uses dth                                                                     | sms                     |
| 232     | Utilities            | dth_provider                                 | Name of DTH service provider                                                                       | sms                     |
| 233     | Utilities            | dth_recency                                  | Number of days since the user received last SMS from DTH provider                                  | sms                     |
| 234     | Utilities            | dth_vintage                                  | Number of days since the user received first SMS from DTH provider                                 | sms                     |
| 235     | Utilities            | electricity_flag                             | Flag for electricity usage                                                                         | sms                     |
| 236     | Utilities            | electricity_provider                         | Name of electricity provider                                                                       | sms                     |
| 237     | Utilities            | electricity_recency                          | Number of days since the user received last SMS from electricity provider                          | sms                     |
| 238     | Utilities            | electricity_vintage                          | Number of days since the user received first SMS from electricity provider                         | sms                     |
| 239     | Utilities            | lpg_flag                                     | Flag if user is an lpg user                                                                        | sms                     |
| 240     | Utilities            | lpg_provider                                 | Name of LPG provider                                                                               | sms                     |
| 241     | Utilities            | lpg_recency                                  | Number of days since the user received last SMS from LPG provider                                  | sms                     |
| 242     | Utilities            | lpg_vintage                                  | Number of days since the user received first SMS from LPG provider                                 | sms                     |
| 243     | Utilities            | max_dpd_broadband                            | Max DPD in broadband account                                                                       | sms                     |
| 244     | Utilities            | max_dpd_dth                                  | Max DPD in DTH account                                                                             | sms                     |
| 245     | Utilities            | max_dpd_electric                             | Max DPD in electricity account                                                                     | sms                     |
| 246     | Telecom              | max_postpaid_dd_pd_diff_c180                 | Days since earliest delinquency in postpaid account in th last 180 days                            | sms                     |
| 247     | Telecom              | min_amt_topup_m1                             | Minimum amount of topup in the last month                                                          | sms                     |
| 248     | Telecom              | min_amt_topup_m2                             | Minimum amount of topup in the second last month                                                   | sms                     |
| 249     | Telecom              | min_amt_topup_m3                             | Minimum amount of mobile topup in third-last calendar month                                        | sms                     |
| 250     | Telecom              | max_amt_topup_m1                             | Maximum amount of topup in the last month                                                          | sms                     |
| 251     | Telecom              | max_amt_topup_m2                             | Maximum amount of topup in the second last month                                                   | sms                     |
| 252     | Telecom              | max_amt_topup_m3                             | Max amount of phone recharge in third-last calender month                                          | sms                     |
| 253     | Telecom              | min_postpaid_dd_pd_diff_c180                 | Days since most recent delinquency in postpaid account in the last 180 days                        | sms                     |
| 254     | Telecom              | sum_amt_topup_m1                             | Total top-up amount in the last month                                                              | sms                     |
| 255     | Telecom              | sum_amt_topup_m2                             | Total top-up amount in the second last month                                                       | sms                     |
| 256     | Telecom              | sum_amt_topup_m3                             | Sum of topup amounts in the third last month                                                       | sms                     |
| 257     | Telecom              | sum_bal_at_topup_m1                          | Sum of balances during all the mobile topups in last calendar month                                | sms                     |
| 258     | Telecom              | sum_bal_at_topup_m2                          | Sum of balances during all the mobile topups in second-last calendar month                         | sms                     |
| 259     | Telecom              | sum_bal_at_topup_m3                          | Sum of balances during all the mobile topups in third-last calendar month                          | sms                     |
| 260     | Telecom              | telecom_operator1                            | Name of telecom operator 1                                                                         | sms                     |
| 261     | Telecom              | telecom_operator1_recency                    | Recency for Telecom operator1                                                                      | sms                     |
| 262     | Telecom              | telecom_operator1_vintage                    | Vintage for Telecom operator1                                                                      | sms                     |
| 263     | Telecom              | telecom_operator2                            | Name of telecom operator 2                                                                         | sms                     |
| 264     | Telecom              | telecom_operator2_recency                    | Recency for Telecom operator2                                                                      | sms                     |
| 265     | Telecom              | telecom_operator2_vintage                    | Vintage for Telecom operator2                                                                      | sms                     |
| 266     | BankAccount          | acc_data_vintage                             | Days since first sms from any bank account was observed                                            | sms                     |
| 267     | BankAccount          | acc0_amt_credits_c30                         | Amount in INR of credits in account0 in the last 30 days                                           | sms                     |
| 268     | BankAccount          | acc0_amt_credits_p30                         | Amount in INR of credits in account0 in the last 31 to 60 days                                     | sms                     |
| 269     | BankAccount          | acc0_av_balance_c30                          | Average of all balances found for account0 in last 30 days                                         | sms                     |
| 270     | BankAccount          | acc0_av_balance_c7                           | Average of all balances found for account0 in last 7 days                                          | sms                     |
| 271     | BankAccount          | acc0_av_balance_c90                          | Average of all balances found for account0 in last 90 days                                         | sms                     |
| 272     | BankAccount          | acc0_bank                                    | Name of bank account0                                                                              | sms                     |
| 273     | BankAccount          | acc0_cnt_credits_c30                         | Count of credits in account0 in last 30 days                                                       | sms                     |
| 274     | BankAccount          | acc0_cnt_credits_p30                         | Count of credits in account0 in last 31 to 60 days                                                 | sms                     |
| 275     | BankAccount          | acc0_cnt_debits_c30                          | Count of debits from account0 in last 30 days                                                      | sms                     |
| 276     | BankAccount          | acc0_cnt_debits_p30                          | Count of debits from account0 in last 31 to 60 days                                                | sms                     |
| 277     | BankAccount          | acc0_eom_av_balance                          | Average of all balances found in last 7 days of last 3 months for account0                         | sms                     |
| 278     | BankAccount          | acc0_max_bal_c7                              | Maximum Balance in Acc0 in the last 7 days                                                         | sms                     |
| 279     | BankAccount          | acc0_max_bal_m0                              | Maximum Balance in Acc0 in the current month                                                       | sms                     |
| 280     | BankAccount          | acc0_max_bal_m1                              | Maximum Balance in Acc0 in the last month                                                          | sms                     |
| 281     | BankAccount          | acc0_max_bal_m2                              | Maximum Balance in Acc0 in the second-last month                                                   | sms                     |
| 282     | BankAccount          | acc0_max_bal_m3                              | Maximum Balance in Acc0 in the third-last month                                                    | sms                     |
| 283     | BankAccount          | acc0_max_bal_p7                              | Maximum Balance in Acc0 in the last 8-14 days                                                      | sms                     |
| 284     | BankAccount          | acc0_min_bal_c30                             | Minimum Balance in Acc0 in the last 30 days                                                        | sms                     |
| 285     | BankAccount          | acc0_min_bal_c7                              | Minimum Balance in Acc0 in the last 7 days                                                         | sms                     |
| 286     | BankAccount          | acc0_min_bal_m0                              | Minimum Balance in Acc0 in the current month                                                       | sms                     |
| 287     | BankAccount          | acc0_min_bal_m1                              | Minimum Balance in Acc0 in the last month                                                          | sms                     |
| 288     | BankAccount          | acc0_min_bal_m2                              | Minimum Balance in Acc0 in the second-last month                                                   | sms                     |
| 289     | BankAccount          | acc0_min_bal_m3                              | Minimum Balance in Acc0 in the third-last month                                                    | sms                     |
| 290     | BankAccount          | acc0_min_bal_p30                             | Minimum Balance in Acc0 in the last 31-60 days                                                     | sms                     |
| 291     | BankAccount          | acc0_min_bal_p7                              | Minimum Balance in Acc0 in the last 8-14 days                                                      | sms                     |
| 292     | BankAccount          | acc1_acc_number                              | Account number of account1                                                                         | sms                     |
| 293     | BankAccount          | acc1_amt_credits_c30                         | Amount in INR of credits in account1 in the last 30 days                                           | sms                     |
| 294     | BankAccount          | acc1_amt_credits_p30                         | Amount in INR of credits in account1 in the last 31 to 60 days                                     | sms                     |
| 295     | BankAccount          | acc1_amt_debits_c30                          | Amount in INR of debits from account1 in last 30 days                                              | sms                     |
| 296     | BankAccount          | acc1_amt_debits_p30                          | Amount in INR of debits from account1 in the last 31 to 60 days                                    | sms                     |
| 297     | BankAccount          | acc1_av_balance_c30                          | Average of all balances found for account1 in last 30 days                                         | sms                     |
| 298     | BankAccount          | acc1_av_balance_c7                           | Average of all balances found for account1 in last 7 days                                          | sms                     |
| 299     | BankAccount          | acc1_av_balance_c90                          | Average of all balances found for account1 in last 90 days                                         | sms                     |
| 300     | BankAccount          | acc1_bank                                    | Name of bank account1                                                                              | sms                     |
| 301     | BankAccount          | acc1_cnt_credits_c30                         | Count of credits in account1 in last 30 days                                                       | sms                     |
| 302     | BankAccount          | acc1_cnt_credits_p30                         | Count of credits in account1 in last 31 to 60 days                                                 | sms                     |
| 303     | BankAccount          | acc1_cnt_debits_c30                          | Count of debits from account1 in last 30 days                                                      | sms                     |
| 304     | BankAccount          | acc1_cnt_debits_p30                          | Count of debits from account1 in last 31 to 60 days                                                | sms                     |
| 305     | BankAccount          | acc1_eom_av_balance                          | Average of all balances found in last 7 days of last 3 months for account1                         | sms                     |
| 306     | BankAccount          | acc1_latest_balance                          | Latest balance found for account1                                                                  | sms                     |
| 307     | BankAccount          | acc1_max_bal_3_mo                           | Maximum balance for account1 in last 3 months                                                      | sms                     |
| 308     | BankAccount          | acc1_max_bal_c30                             | Maximum Balance in Acc1 in the last 30 days                                                        | sms                     |
| 309     | BankAccount          | acc1_max_bal_c7                              | Maximum Balance in Acc1 in the last 7 days                                                         | sms                     |
| 310     | BankAccount          | acc1_max_bal_m0                              | Maximum Balance in Acc1 in the current last month                                                  | sms                     |
| 311     | BankAccount          | acc1_max_bal_m1                              | Maximum Balance in Acc1 in the last month                                                          | sms                     |
| 312     | BankAccount          | acc1_max_bal_m2                              | Maximum Balance in Acc1 in the second-last month                                                   | sms                     |
| 313     | BankAccount          | acc1_max_bal_m3                              | Maximum Balance in Acc1 in the third-last month                                                    | sms                     |
| 314     | BankAccount          | acc1_max_bal_p30                             | Maximum Balance in Acc1 in the last 31-60 days                                                     | sms                     |
| 315     | BankAccount          | acc1_max_bal_p7                              | Maximum Balance in Acc1 in the last 8-14 days                                                      | sms                     |
| 316     | BankAccount          | acc1_max_balance                             | Maximum balance for account1                                                                       | sms                     |
| 317     | BankAccount          | acc1_min_bal_3_mo                           | Minimum balance for account1 in last 3 months                                                      | sms                     |
| 318     | BankAccount          | acc1_min_bal_c30                             | Minimum Balance in Acc1 in the last 30 days                                                        | sms                     |
| 319     | BankAccount          | acc1_min_bal_c7                              | Minimum Balance in Acc1 in the last 7 days                                                         | sms                     |
| 320     | BankAccount          | acc1_min_bal_m0                              | Minimum Balance in Acc1 in the current month                                                       | sms                     |
| 321     | BankAccount          | acc1_min_bal_m1                              | Minimum Balance in Acc1 in the last month                                                          | sms                     |
| 322     | BankAccount          | acc1_min_bal_m2                              | Minimum Balance in Acc1 in the second-last month                                                   | sms                     |
| 323     | BankAccount          | acc1_min_bal_m3                              | Minimum Balance in Acc1 in the third-last month                                                    | sms                     |
| 324     | BankAccount          | acc1_min_bal_p30                             | Minimum Balance in Acc1 in the last 31-60 days                                                     | sms                     |
| 325     | BankAccount          | acc1_min_bal_p7                              | Minimum Balance in Acc1 in the last 8-14 days                                                      | sms                     |
| 326     | BankAccount          | acc1_min_balance                             | Minimum balance for account1                                                                       | sms                     |
| 327     | BankAccount          | acc1_recency                                 | Days since last sms from account1 was observed                                                     | sms                     |
| 328     | BankAccount          | acc1_sms_count                               | Total number of messages found for acocunt1                                                        | sms                     |
| 329     | BankAccount          | acc1_vintage                                 | Days since first sms from account1 was observed                                                    | sms                     |
| 330     | BankAccount          | acc2_acc_number                              | Account number of account2                                                                         | sms                     |
| 331     | BankAccount          | acc2_amt_credits_c30                         | Amount in INR of credits in account2 in the last 30 days                                           | sms                     |
| 332     | BankAccount          | acc2_amt_credits_p30                         | Amount in INR of credits in account2 in the last 31 to 60 days                                     | sms                     |
| 333     | BankAccount          | acc2_amt_debits_c30                          | Amount in INR of debits from account2 in last 30 days                                              | sms                     |
| 334     | BankAccount          | acc2_amt_debits_p30                          | Amount in INR of debits from account2 in the last 31 to 60 days                                    | sms                     |
| 335     | BankAccount          | acc2_av_balance_c30                          | Average of all balances found for account2 in last 30 days                                         | sms                     |
| 336     | Balance              | acc2_av_balance_c7                           | Average of all balances found for account2 in last 7 days                                          | sms                     |
| 337     | BankAccount          | acc2_av_balance_c90                          | Average of all balances found for account2 in last 90 days                                         | sms                     |
| 338     | BankAccount          | acc2_bank                                    | Name of bank account2                                                                              | sms                     |
| 339     | BankAccount          | acc2_cnt_credits_c30                         | Count of credits in account2 in last 30 days                                                       | sms                     |
| 340     | BankAccount          | acc2_cnt_credits_p30                         | Count of credits in account2 in last 31 to 60 days                                                 | sms                     |
| 341     | BankAccount          | acc2_cnt_debits_c30                          | Count of debits from account2 in last 30 days                                                      | sms                     |
| 342     | BankAccount          | acc2_cnt_debits_p30                          | Count of debits from account2 in last 31 to 60 days                                                | sms                     |
| 343     | BankAccount          | acc2_eom_av_balance                          | Average of all balances found in last 7 days of last 3 months for account2                         | sms                     |
| 344     | BankAccount          | acc2_latest_balance                          | Latest balance found for account2                                                                  | sms                     |
| 345     | BankAccount          | acc2_max_bal_3_mo                           | Maximum balance for account2 in last 3 months                                                      | sms                     |
| 346     | BankAccount          | acc2_max_bal_c30                             | Maximum Balance in Acc2 in the last 30 days                                                        | sms                     |
| 347     | Balance              | acc2_max_bal_c7                              | Maximum balance in Acc2 in the last 7 days                                                         | sms                     |
| 348     | Balance              | acc2_max_bal_m0                              | Maximum balance in Acc2 in the current month                                                       | sms                     |
| 349     | BankAccount          | acc2_max_bal_m1                              | Maximum Balance in Acc2 in the last month                                                          | sms                     |
| 350     | Balance              | acc2_max_bal_m2                              | Maximum balance in Acc2 in the second-last month                                                   | sms                     |
| 351     | Balance              | acc2_max_bal_m3                              | Maximum balance in Acc2 in the third-last month                                                    | sms                     |
| 352     | Balance              | acc2_max_bal_p30                             | Maximum balance in Acc2 in the previous 30 days                                                    | sms                     |
| 353     | Balance              | acc2_max_bal_p7                              | Maximum balance in Acc2 in the last 31-60 days                                                     | sms                     |
| 354     | BankAccount          | acc2_max_balance                             | Maximum balance for account2                                                                       | sms                     |
| 355     | BankAccount          | acc2_min_bal_3_mo                           | Minimum balance for account2 in last 3 months                                                      | sms                     |
| 356     | BankAccount          | acc2_min_bal_c30                             | Minimum Balance in Acc2 in the last 30 days                                                        | sms                     |
| 357     | Balance              | acc2_min_bal_c7                              | Minimum balance in Acc2 in the last 7 days                                                         | sms                     |
| 358     | Balance              | acc2_min_bal_m0                              | Minimum balance in Acc2 in the current month                                                       | sms                     |
| 359     | BankAccount          | acc2_min_bal_m1                              | Minimum Balance in Acc2 in the last month                                                          | sms                     |
| 360     | Balance              | acc2_min_bal_m2                              | Minimum balance in Acc2 in the second-last month                                                   | sms                     |
| 361     | Balance              | acc2_min_bal_m3                              | Minimum balance in Acc2 in the third-last month                                                    | sms                     |
| 362     | Balance              | acc2_min_bal_p30                             | Minimum balance in Acc2 in the last 31-60 days                                                     | sms                     |
| 363     | Balance              | acc2_min_bal_p7                              | Minimum balance in Acc2 in the last 8-14 days                                                      | sms                     |
| 364     | BankAccount          | acc2_min_balance                             | Minimum balance for account2                                                                       | sms                     |
| 365     | BankAccount          | acc2_recency                                 | Days since last sms from account2 was observed                                                     | sms                     |
| 366     | BankAccount          | acc2_sms_count                               | Total number of messages found for acocunt2                                                        | sms                     |
| 367     | BankAccount          | acc2_vintage                                 | Days since first sms from account2 was observed                                                    | sms                     |
| 368     | Flag                 | net_banking_flag                             | Flag if user uses net banking                                                                      | sms                     |
| 369     | Apps                 | cnt_play_store_apps                          | Total number of Google Play Store Apps found                                                       | apps                    |
| 370     | Apps                 | avg_price_paid_apps                          | Average price of all purchased apps                                                                | apps                    |
| 371     | Apps                 | cnt_apps_genre_books_and_reference           | Total Number of Apps categorised as Books & Reference on Google Play Store                         | apps                    |
| 372     | Apps                 | cnt_apps_genre_lifestyle                     | Total Number of Apps categorised as Lifestyle on Google Play Store                                 | apps                    |
| 373     | Apps                 | cnt_apps_genre_food_and_drink                | Total Number of Apps categorised as Food & Drink on Google Play Store                              | apps                    |
| 374     | Apps                 | cnt_apps_genre_productivity                  | Total Number of Apps categorised as Productivity on Google Play Store                              | apps                    |
| 375     | Apps                 | days_since_last_update                       | Number of days since any app was last updated                                                      | apps                    |
| 376     | Apps                 | cnt_apps_genre_finance_i30                   | Total Number of Fincance Apps installed in the first 30 days of first installed app                | apps                    |
| 377     | Apps                 | cnt_apps_genre_books_and_reference_i30       | Total Number of Books & Reference Apps installed in the first 30 days of first installed app       | apps                    |
| 378     | Apps                 | cnt_apps_genre_entertainment_i30             | Total Number of Entertainment Apps installed in the first 30 days of first installed app           | apps                    |
| 379     | Apps                 | cnt_apps_genre_lifestyle_i30                 | Total Number of Lifestyle Apps installed in the first 30 days of first installed app               | apps                    |
| 380     | Apps                 | cnt_apps_genre_food_and_drink_i30            | Total Number of Food & Drinks Apps installed in the first 30 days of first installed app           | apps                    |
| 381     | Apps                 | cnt_apps_genre_business_i30                  | Total Number of Business Apps installed in the first 30 days of first installed app                | apps                    |
| 382     | Apps                 | cnt_apps_genre_social_i30                    | Total Number of Social Apps installed in the first 30 days of first installed app                  | apps                    |
| 383     | Apps                 | cnt_apps_genre_communication_i30             | Total Number of Communication Apps installed in the first 30 days of first installed app           | apps                    |
| 384     | Apps                 | cnt_apps_genre_productivity_i30              | Total Number of Productivity Apps installed in the first 30 days of first installed app            | apps                    |
| 385     | Apps                 | r_cnt_apps_genre_finance_c30_c90             | Ratio of number of Finance Apps installed in last 30 days to last 90 days                          | apps                    |
| 386     | Apps                 | r_cnt_apps_genre_books_and_reference_c30_c90 | Ratio of number of Books & Reference Apps installed in last 30 days to last 90 days                | apps                    |
| 387     | Apps                 | r_cnt_apps_genre_entertainment_c30_c90       | Ratio of number of Entertainment Apps installed in last 30 days to last 90 days                    | apps                    |
| 388     | Apps                 | r_cnt_apps_genre_lifestyle_c30_c90           | Ratio of number of Lifestyle Apps installed in last 30 days to last 90 days                        | apps                    |
| 389     | Apps                 | r_cnt_apps_genre_food_and_drink_c30_c90      | Ratio of number of Food & Drink Apps installed in last 30 days to last 90 days                     | apps                    |
| 390     | Apps                 | r_cnt_apps_genre_business_c30_c90            | Ratio of number of Business Apps installed in last 30 days to last 90 days                         | apps                    |
| 391     | Apps                 | r_cnt_apps_genre_social_c30_c90              | Ratio of number of Social Apps installed in last 30 days to last 90 days                           | apps                    |
| 392     | Apps                 | r_cnt_apps_genre_communication_c30_c90       | Ratio of number of Communication Apps installed in last 30 days to last 90 days                    | apps                    |
| 393     | Apps                 | r_cnt_apps_genre_productivity_c30_c90        | Ratio of number of Productivity Apps installed in last 30 days to last 90 days                     | apps                    |
| 394     | Apps                 | cnt_apps_content_rating_adult                | Total number of apps with content rating categorised as 17+ by Google Play Store                   | apps                    |
| 395     | Apps                 | cnt_apps_content_rating_teen                 | Total number of apps with content rating categorised as teen by Google Play Store                  | apps                    |
| 396     | Apps                 | cnt_apps_good_ratings                        | Total number of apps with more than 4.3 rating on Google Play Store                                | apps                    |
| 397     | Apps                 | cnt_apps_bad_ratings                         | Total number of apps with less than 3.5 rating on Google Play Store                                | apps                    |
| 398     | Apps                 | cnt_apps_more_popular                        | Total number of apps with more than 100M total downloads on Google Play Store                      | apps                    |
| 399     | Apps                 | source_app_vintage                           | Number of days since app containing the FinBox Sdk was installed                                   | apps                    |
| 400     | Apps                 | cnt_apps_less_popular                        | Total number of apps with less than 100k downloads on Google Play Store                            | apps                    |
| 401     | Loan                 | max_dpd_acc3                                 | Max DPD in tertiary loan account                                                                   | sms                     |
| 402     | Loan                 | max_dpd_acc2                                 | Max DPD in secondary loan account                                                                  | sms                     |
| 403     | Loan                 | cnt_loan_accounts                            | Number of loan accounts                                                                            | sms                     |
| 404     | Loan                 | loan_acc3                                    | Name of the third most recent loan account (also referred as tertiary loan account)                | sms                     |
| 405     | Loan                 | loan_acc2                                    | Name of the second most recent loan account (also referred as secondary loan account)              | sms                     |
| 406     | Loan                 | loan_acc1                                    | Name of the most recent loan account (also referred as primary loan account)                       | sms                     |
| 407     | Loan                 | lender3                                      | Name of the tertiary loan account lender                                                           | sms                     |
| 408     | Loan                 | lender2                                      | Name of the secondary loan account lender                                                          | sms                     |
| 409     | Loan                 | lender1                                      | Name of the primary loan account lender                                                            | sms                     |
| 410     | Loan                 | loan_acc3_recency                            | Number of days since the user received last SMS from tertiary recent loan account                  | sms                     |
| 411     | Loan                 | loan_acc2_recency                            | Number of days since the user received last SMS from secondary loan account                        | sms                     |
| 412     | Loan                 | loan_acc1_recency                            | Number of days since the user received last SMS from primary loan account                          | sms                     |
| 413     | Loan                 | loan_acc3_autodebitflag                      | Is auto debit set on tertiary loan account                                                         | sms                     |
| 414     | Loan                 | loan_acc2_autodebitflag                      | Is auto debit set on secondary loan account                                                        | sms                     |
| 415     | Loan                 | loan_acc1_autodebitflag                      | Is auto debit set on primary loan account                                                          | sms                     |
| 416     | Loan                 | emi_loan_acc3                                | EMI of Tertiary Loan Account                                                                       | sms                     |
| 417     | Loan                 | emi_loan_acc2                                | EMI of Secondary Loan Account                                                                      | sms                     |
| 418     | Loan                 | cnt_delinquncy_acc3                          | Number of Delinquency in Loan account 3                                                            | sms                     |
| 419     | Loan                 | cnt_delinquncy_acc2                          | Number of Delinquency in Loan account 2                                                            | sms                     |
| 420     | Loan                 | cnt_delinquncy_acc1                          | Number of Delinquency in Loan account 1                                                            | sms                     |
| 421     | Credit card          | cc1_bill_m1                                  | Bill amount for credit card-1 in the last month                                                    | sms                     |
| 422     | Credit card          | cc2_bank                                     | Credit card-2 provider name                                                                        | sms                     |
| 423     | Balance              | max_bal_m0                                   | maximum balance across all savings accounts in current calendar month (month to date)              | sms                     |
| 424     | Balance              | max_bal_m1                                   | maximum balance across all savings accounts in previous calendar month                             | sms                     |
| 425     | Balance              | max_bal_m2                                   | maximum balance across all savings accounts in the calendar month, 2 months prior to current month | sms                     |
| 426     | Balance              | days_since_max_bal_m0                        | days since occurance of max_bal_m0                                                                 | sms                     |
| 427     | Balance              | days_since_max_bal_m1                        | days since occurance of max_bal_m1                                                                 | sms                     |
| 428     | Balance              | days_since_max_bal_m2                        | days since occurance of max_bal_m2                                                                 | sms                     |
| 429     | Flag                 | cheque_bounce_c30                            | Flag if any cheque bounce in the last 30 days                                                      | sms                     |
| 430     | Loan                 | cnt_delinquncy_loan_c15                      | count of distinct loan accounts found to be delinquent in current 15 days                          | sms                     |
| 431     | Loan                 | amt_delinquncy_loan_c60                      | amount outstanding across all loan accounts in current 60 days                                     | sms                     |
| 432     | Loan                 | amt_delinquncy_loan_c30                      | amount outstanding across all loan accounts in current 30 days                                     | sms                     |
| 433     | Loan                 | amt_delinquncy_loan_c15                      | amount outstanding across all loan accounts in current 15 days                                     | sms                     |
| 434     | Location             | cnt_location_datapoints                      | Total number of location datapoint received                                                        | location                |
| 435     | Location             | cnt_accurate_location_datapoints             | Total number of location datapoint received with accuracy less than 100 meters                     | location                |
| 436     | Location             | location_recency                             | Days since the latest location datapoint was received                                              | location                |
| 437     | Location             | location_vintage                             | Days since the earliest location datapoint was received                                            | location                |
| 438     | Location             | bestplace_lat                                | Latitude of most probable location                                                                 | location                |
| 439     | Location             | bestplace_long                               | Longitude of most probable location                                                                | location                |
| 440     | Location             | home_lat                                     | Latitude of home location                                                                          | location                |
| 441     | Location             | home_long                                    | Longitude of home location                                                                         | location                |
| 442     | Location             | work_lat                                     | Latitude of work location                                                                          | location                |
| 443     | Location             | work_long                                    | Longitude of work location                                                                         | location                |
| 444     | Location             | home_work_dist                               | Distance between home and work location (in km)                                                    | location                |
| 445     | Null Reason          | sms_data_null_reason                         | Reason code for SMS features being null                                                            | sms                     |
| 446     | Null Reason          | location_data_null_reason                    | Reason code for Location features being null                                                       | location                |
| 447     | Null Reason          | device_data_null_reason                      | Reason code for Device features being null                                                         | device                  |
| 448     | Null Reason          | apps_data_null_reason                        | Reason code for Apps features being null                                                           | apps                    |
| 449     | Credit card          | cc1_utilisation                              | Percentage Utilisation for Credit card account1                                                    | sms                     |
| 450     | Score                | score_acquisition                            | Tailored FIS for Acquisition population. Range 300-900                                             | all                     |
| 451     | Score                | score_acquisition_rejection_flag             | Rejection Flag for acquisition population                                                          | all                     |
| 452     | Score                | score_xsell                                  | Tailored FIS for Cross-Sell population. Range 300-900                                              | all                     |
| 453     | Score                | score_xsell_rejection_flag                   | Rejection Flag for Xsell population                                                                | all                     |
| 454     | Score                | score_digital_acquisition                    | Tailored FIS for Digital Acquisition population. Range 300-900                                     | all                     |
| 455     | Loan                 | recommended_duedate_adj                      | Recommended due date a new loan (within -5 to +10 days from decision_date)                         | sms                     |
| 456     | User Profile         | estimated_age_bracket                        | Estimated age-bracket of the user                                                                  | sms                     |
| 457     | Location             | latest_location_timestamp                    | Timestamp of the latest accurate location data                                                     | location                |
| 458     | Loan                 | obligations                                  | Total monthly amount dues                                                                          | sms                     |
| 459     | User Profile         | profession_type                              | Profession type of the user                                                                        | sms                     |
| 460     | Loan                 | cnt_loan_approved_c7                         | Number of loans approved in the last 7 days                                                        | sms                     |
| 461     | Loan                 | cnt_loan_approved_c60                        | Number of loans approved in the last 60 days                                                       | sms                     |
| 462     | Loan                 | cnt_loan_approved_c90                        | Number of loans approved in the last 90 days                                                       | sms                     |
| 463     | Loan                 | cnt_loan_rejected_c7                         | Number of loans rejected in the last 7 days                                                        | sms                     |
| 464     | Loan                 | cnt_loan_rejected_c60                        | Number of loans rejected in the last 60 days                                                       | sms                     |
| 465     | Loan                 | cnt_loan_rejected_c90                        | Number of loans rejected in the last 90 days                                                       | sms                     |
| 466     | Credit card          | cnt_cc_applications_c7                       | Number of credit card applications in the last 7 days                                              | sms                     |
| 467     | Credit card          | cnt_cc_applications_c30                      | Number of credit card applications in the last 30 days                                             | sms                     |
| 468     | Credit card          | cnt_cc_applications_c60                      | Number of credit card applications in the last 60 days                                             | sms                     |
| 469     | Credit card          | cnt_cc_applications_c90                      | Number of credit card applications in the last 90 days                                             | sms                     |
| 470     | Aggregate            | data_sufficiency_flag                        | Flag if user ahs sufficient SMS data                                                               | sms                     |
| 471     | Aggregate            | rejection_rule                               | Flag for rejection of user for a new loan                                                          | sms                     |
| 472     | Credit card          | cc2_bill_m1                                  | Secondary Credit Card - Last Month Bill                                                            | sms                     |
| 473     | Credit card          | cc2_credit_limit                             | Secondary Credit Card - Total Limit Sanctioned                                                     | sms                     |
| 474     | Score                | score_digital_acquisition_v2_probability     | Tailored FIS for Digital Acquisition population - Probability of Default                           | all                     |
| 475     | Score                | score_digital_acquisition_v2                 | Tailored FIS for Digital Acquisition population - Range - 300 - 900                                | all                     |
| 477     | Income               | calculated_income_amount_v2                  | Income of the user (version 2)                                                                     | sms                     |
| 478     | Income               | calculated_income_account_v2                 | Bank Account associated with the income (version 2)                                                | sms                     |
| 479     | Income               | calculated_income_confidence_v2              | Confidence level of Income calculated (version 2)                                                  | sms                     |
| 480     | Apps                 | cnt_sub_genre_lending_score_below_2_apps    | Number of apps of lending industry with less than 2 ratings                                        | apps                    |
| 481     | Apps                 | vintage_apps_sub_genre_egovernance           | Days since first E-governance app installed                                                        | apps                    |
| 482     | Apps                 | cnt_apps_sub_genre_lending_v2                | Number of apps of lending industry                                                                 | apps                    |
| 483     | Apps                 | vintage_apps_sub_genre_lending_c60           | Days since first lending app installed in the last 60 days                                         | apps                    |
| 484     | Apps                 | vintage_apps_sub_genre_lending_c90           | Days since first lending app installed in the last 90 days                                         | apps                    |
| 485     | Apps                 | vintage_apps_sub_genre_utilities_c180        | Days since first utility app installed in the last 180 days                                        | apps                    |
| 486     | Apps                 | cnt_apps_sub_segment_betting_games_c7        | Number of apps of segment betting games installed in last 7 days                                   | apps                    |
| 487     | Apps                 | cnt_apps_sub_segment_betting_games_c30       | Number of apps of segment betting games installed in last 30 days                                  | apps                    |
| 488     | Apps                 | cnt_apps_sub_segment_betting_games_c90       | Number of apps of segment betting games installed in last 90 days                                  | apps                    |
| 489     | Apps                 | cnt_apps_sub_genre_games_c7                  | Number of apps of industry games installed in last 7 days                                          | apps                    |
| 490     | Apps                 | cnt_apps_sub_genre_games_c30                 | Number of apps of industry games installed in last 30 days                                         | apps                    |
| 491     | Apps                 | cnt_apps_sub_genre_games_c90                 | Number of apps of industry games installed in last 90 days                                         | apps                    |
| 492     | Apps                 | cnt_apps_sub_genre_lending_c30               | Total Number of apps of lending category installed in the last 30 days                             | apps                    |
| 493     | Apps                 | cnt_apps_sub_genre_lending_c60               | Total Number of apps of lending category installed in the last 60 days                             | apps                    |
| 494     | Apps                 | cnt_apps_sub_genre_lending_c90               | Total Number of apps of lending category installed in the last 90 days                             | apps                    |
| 495     | Loan                 | amt_delinquncy_cc_c15                        | Amount of delinquency on credit-card accounts in the last 15 days                                  | sms                     |
| 496     | Loan                 | amt_delinquncy_cc_c30                        | Amount of delinquency on credit-card accounts in the last 30 days                                  | sms                     |
| 497     | Loan                 | amt_delinquncy_cc_c60                        | Amount of delinquency on credit-card accounts in the last 60 days                                  | sms                     |
| 498     | Loan                 | amt_delinquncy_cc_c90                        | Amount of delinquency on credit-card accounts in the last 90 days                                  | sms                     |
| 499     | Loan                 | cnt_delinquncy_cc_c15                        | Count of delinquencies on credit-card accounts in the last 15 days                                 | sms                     |
| 500     | Loan                 | cnt_delinquncy_cc_c30                        | Count of delinquencies on credit-card accounts in the last 30 days                                 | sms                     |
| 501     | Loan                 | cnt_delinquncy_cc_c60                        | Count of delinquencies on credit-card accounts in the last 60 days                                 | sms                     |
| 502     | Loan                 | cnt_delinquncy_cc_c90                        | Count of delinquencies on credit-card accounts in the last 90 days                                 | sms                     |
| 503     | Loan                 | amt_delinquncy_bnpl_c15                      | Amount of delinquency on BNPL accounts in the last 15 days                                         | sms                     |
| 504     | Loan                 | amt_delinquncy_bnpl_c30                      | Amount of delinquency onBNPLaccounts in the last 30 days                                       | sms                     |
| 505     | Loan                 | amt_delinquncy_bnpl_c60                      | Amount of delinquency on BNPLaccounts in the last 60 days                                       | sms                     |
| 506     | Loan                 | amt_delinquncy_bnpl_c90                      | Amount of delinquency onBNPLaccounts in the last 90 days                                       | sms                     |
| 507     | Loan                 | cnt_delinquncy_bnpl_c15                      | Count of delinquencies on BNPLaccounts in the last 15 days                                      | sms                     |
| 508     | Loan                 | cnt_delinquncy_bnpl_c30                      | Count of delinquencies onBNPLaccounts in the last 30 days                                      | sms                     |
| 509     | Loan                 | cnt_delinquncy_bnpl_c60                      | Count of delinquencies on BNPLaccounts in the last 60 days                                      | sms                     |
| 510     | Loan                 | cnt_delinquncy_bnpl_c90                      | Count of delinquencies onBNPLaccounts in the last 90 days                                      | sms                     |
| 511     | Apps                 | cnt_apps_fake_gps_c30                        | Number of fake GPS apps installed in the last 30 days                                            | apps                    |
| 512     | Apps                 | cnt_apps_fake_sms                            | Number of fake sms apps installed                                                                  | apps                    |
| 513     | Apps                 | cnt_apps_backup_c30                          | Number of backup apps installed in the last 30 days                                                | apps                    |
| 514     | Apps                 | cnt_apps_root_c30                            | Number of rooting apps installed in the last 30 days                                               | apps                    |
| 515     | Apps                 | cnt_apps_data_editor                         | Number of SMS or call logs editor apps installed                                                   | apps                    |
| 516     | Loan                 | cnt_overdue_senders_c30                      | Number of distinct overdue SMS senders in the last 30 days                                         | sms                     |
| 517     | Loan                 | cnt_loan_applications_c30                    | Number of loan applications in the last 30 days                                                    | sms                     |
| 518     | Loan                 | cnt_loan_applications_c60                    | Number of loan applications in the last 60 days                                                    | sms                     |
| 519     | Loan                 | cnt_loan_applications_c90                    | Number of loan applications in the last 90 days                                                    | sms                     |
| 520     | Imputed Bank Account | imputed_acc0_amt_credits_c30                 | Amount of credits in acc0 in the last 30 days (post imputing missing transactions)                 | sms                     |
| 521     | Imputed Bank Account | imputed_acc0_amt_credits_p30                 | Amount credits in acc0 in the last 30 to 60 days (post imputing missing transactions)              | sms                     |
| 522     | Imputed Bank Account | imputed_acc0_amt_debits_c30                  | Amount of debits in acc0 in the last 30 days (post imputing missing transactions)                  | sms                     |
| 523     | Imputed Bank Account | imputed_acc0_amt_debits_p30                  | Amount of debits in acc0 in the last 30 to 60 days (post imputing missing transactions)            | sms                     |
| 524     | Imputed Bank Account | imputed_acc0_av_balance_c30                  | Average balance in acc0 in the last 30 days (post imputing missing transactions)                   | sms                     |
| 525     | Imputed Bank Account | imputed_acc0_av_balance_c60                  | Average balance in acc0 in the last 60 days (post imputing missing transactions)                   | sms                     |
| 526     | Imputed Bank Account | imputed_acc0_av_balance_c90                  | Average balance in acc0 in the last 90 days (post imputing missing transactions)                   | sms                     |
| 527     | Imputed Bank Account | imputed_acc0_av_balance_c7                   | Average balance in acc0 in the last 7 days (post imputing missing transactions)                    | sms                     |
| 528     | Imputed Bank Account | imputed_acc0_avg_bal_m1                      | Average balance in acc0 in the last month (post imputing missing transactions)                     | sms                     |
| 529     | Imputed Bank Account | imputed_acc0_avg_bal_m2                      | Average balance in acc0 in the last to last month (post imputing missing transactions)             | sms                     |
| 530     | Imputed Bank Account | imputed_acc0_avg_bal_m3                      | Average balance in acc0 in the third last month (post imputing missing transactions)               | sms                     |
| 535     | Fraud                | all_connected_devices                        | All Devices Connected to the user                                                                  | phone_state             |
| 536     | Fraud                | total_connected_users                        | All Users connected to a single device                                                             | phone_state             |
| 537     | Location             | earliest_location_lat                        | Earliest location latitude                                                                         | location                |
| 538     | Location             | earliest_location_long                       | Earliest location Logitude                                                                         | location                |
| 539     | User Profile         | estimated_gender                             | Estimated Gender of User                                                                           | all                     |
| 540     | Loan                 | recommended_account                          | Recommended Account to set up NACH for a new loan                                                  | sms                     |
