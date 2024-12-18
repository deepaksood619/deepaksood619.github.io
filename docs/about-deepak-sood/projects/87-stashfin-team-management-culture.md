# Stashfin Team Management / Culture

### Hiring

- Automated the hiring process
- Hired around 12 freshers and 5 senior developers
- Processes around onboarding and automated team pulses
- Onboarding tasks + manager and team introductions + onboarding buddy

### Culture

- Processes around reviews, appraisals and feedbacks
- Project management tool - first gitlab issue boards, then moved to JIRA
- Daily standups + scrums
- Documentation

### Mandatory Code Reviews

- Atleast 2 approvals, one from senior dev and one from junior dev is mandatory for merging the code
- Using Git and a proper PR process. Every feature or bug fix is a separate branch and submitted as a PR

![stashfin-git-review-process](../../media/Pasted%20image%2020231201181214.jpg)

### Scrum / Kanban / Project Management

- Implemented Agile project management methodology across teams

![example-scrum-board](../../media/Pasted%20image%2020231201181414.jpg)

## Documentation

- Used a combination of google docs with team folders, etc
- Introduced confluence for documentation

![example-confluence-documentation](../../media/Pasted%20image%2020231201181347.jpg)

### Process process for documentation

#### ADRs (Architecture Design Records) and HLD (High Level Diagrams)

- ADRs are documents that capture the important decisions regarding the architecture of our software. They serve as a record of the context, options considered, and the rationale behind the chosen solution.
- HLD provides an overview of the system architecture, major components, and their interactions. It helps in aligning the team and stakeholders on the overall structure of the application.
- We should update the HLD whenever there are significant changes to the system architecture. It serves as a reference for new team members and ensures everyone has a shared understanding of the system.

![high-level-diagram-example](../../media/Pasted%20image%2020231201183011.jpg)

#### LLD (Low Level Diagrams) and ER (Entity Relationship Diagrams)

- LLD dives into the details of individual components or modules. It includes class diagrams, data flow diagrams, and other specifics that guide the implementation.
- LLD documents are often created in collaboration with the development team. They serve as a valuable resource during the implementation phase and aid in code reviews.
- ERDs visually represent the relationships between entities in our database. They are crucial for understanding the data model and ensuring that it aligns with the requirements.
- Each table and its relationships are clearly defined in the ERD, making it easier for developers, database administrators, and stakeholders to comprehend the data structure.
- We include ERDs as part of our documentation to maintain a clear understanding of the database schema. This is especially helpful during database migrations or when onboarding new team members.
- During code reviews or discussions about database changes, referring to the ERD ensures that everyone is on the same page regarding the data model.

![low-level-diagram-example](../../media/Pasted%20image%2020231201183115.jpg)

![entity-relationship-diagram](../../media/Pasted%20image%2020231201183143.jpg)
