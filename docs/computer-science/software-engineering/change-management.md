# Change Management

Change Advisory Board (CAB)

## CAB for Database Changes

- **Deployment Information**
    - **Proposed Time of Deployment:** Exact date and time the changes are scheduled.
    - **Database Components Changed:** Details on tables, schemas, or data structures altered.
    - **Functionalities Impacted:** Overview of application functionalities affected by the database changes.
    - **Foreseen Risks:** Identification of potential risks and mitigation strategies.
    - **Database Changes:**
        - Schema changes
        - Data migrations
        - Index modifications
        - Stored procedures or functions changes
        - Security updates
        - Rollback and DR Plan
- **Developer**
    - **Validated Changes:** Confirmation that the database modifications work as expected.
    - **Functionality Validation:** Verification that all functionalities interacting with the database still operate correctly.
    - **Code Review:** Peer review of the scripts and migration code.
    - **Sign Off (Lead):** Approval from a technical lead or database architect.
- **QA (Quality Assurance)**
    - **Sanity Checks:** Basic tests to ensure that the database operates.
    - **Regression Testing:** Detailed testing to verify that the existing functionalities are not adversely affected.
    - **Database Behaviour Analysis:** Assessment of pre and post behaviour of database performance.
    - **Performance Testing (PT) if Needed:** Load tests to assess the impact of changes on database performance.
    - **Sign Off:** Approval from the QA team indicating readiness for deployment.
- **Business**
    - **Confirmation on Deployment Time:** Agreement on the timing of deployment from a business standpoint.
    - **Business Validation:** Confirmation that database outputs meet business requirements and expectations.
    - **Sign Off:** Formal approval from the business stakeholders.
- **DevOps**
    - **Monitoring Strategy:** Outline of proactive monitoring techniques to be employed before and after deployment.
    - **System Resource Behaviour:** Monitoring and evaluation of system resources before and after the changes to ensure stability.

## CAB for DevOps

- Deployment
- Deployment Information
    - Proposed time of deployment
    - Module changed
    - Functionalities impacted
    - Any foreseen risk
    - DB Changes
- Developer
    - Validated module
    - Validations of functionalities
    - Code Review done
    - Sign off (Lead)
- QA
    - Sanity
    - Regression of impacted functionalities
    - Pre & post behaviour of application
    - PT if needed
    - Sign Off
- Business
    - Confirmation on deployment time
    - Business validation
    - Sign Off
- DevOps
    - What all pro-active monitoring should be done
    - Pre & post behaviour of application and system resources
