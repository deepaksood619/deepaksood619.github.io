# Tableau

- [Architecture and Components](ai/data-visualization/tableau/architecture-components.md)
- [Data Model](ai/data-visualization/tableau/data-model.md)
- [Data Sources](ai/data-visualization/tableau/data-sources.md)
- [Concepts](ai/data-visualization/tableau/concepts.md)
- [Augmented Analytics](ai/data-visualization/tableau/augmented-analytics.md)
- [Dashboarding](ai/data-visualization/tableau/dashboarding.md)
- [Administration](ai/data-visualization/tableau/administration.md)
- [Questions](ai/data-visualization/tableau/interview-questions.md)
- [Others](ai/data-visualization/tableau/others.md)

Visualization from relational databases and data cubes, OLAP cubes, cloud databases

## Public Dashboards

https://www.datacamp.com/community/tutorials/tableau-visualizations-with-measure-names-and-measure-values

https://public.tableau.com/en-us/gallery/travel-planner-emissions-calculator

[https://public.tableau.com/app/discover](https://public.tableau.com/app/discover)

[8 Most-Favorited Data Visualizations on Tableau Public](https://www.tableau.com/blog/8-most-favorited-data-visualizations-tableau-public)

## Types

- Tableau Server
- Tableau Online

### Hosting & Infrastructure

| **Aspect**              | **Tableau Server**                                                     | **Tableau Online**                                          |
| ----------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Hosting**             | Self-hosted on-premise or in a private cloud (e.g., AWS, Azure, GCP).  | Hosted by Tableau (cloud-based SaaS solution).              |
| **Infrastructure**      | Managed by your organization’s IT team.                                | Managed entirely by Tableau.                                |
| **Setup & Maintenance** | Requires installation, configuration, and updates by the organization. | No setup required; Tableau handles updates and maintenance. |
| **Hardware Costs**      | Organization bears hardware and infrastructure costs.                  | No hardware costs; pricing is subscription-based.           |

## Debugging

Client-side redering - `:render=false`

### Configuration

TSM - Tableau Services Manager

cli client for server

```bash
tsm start

tsm configuration list-dynamic-keys

tsm help

tsm configuration set -k vizportal.log.level -v debug
tsm configuration set -k vizqlserver.log.level -v debug

tsm configuration set -k vizportal.log.level -v info
tsm configuration set -k vizqlserver.log.level -v info
```

## REST APIs

- [REST API and Resource Versions - Tableau](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm)
- [Triggering extract refreshes for Tableau Server workbooks and data sources using the REST API | by Elliott Stam | Devyx | Medium](https://medium.com/snake-charmer-python-and-analytics/triggering-extract-refreshes-for-tableau-server-workbooks-and-data-sources-using-the-rest-api-d4a8b8c001bf)

## Learning

- [Data Viz Heroes](https://twitter.com/i/lists/231325896)
- [Data + Science](https://www.dataplusscience.com/TableauReferenceGuide/)

## Resources

- [tsm Command Line Reference - Tableau](https://help.tableau.com/current/server/en-us/tsm.htm)
- [Developer Path | Extending Functionality | Tableau](https://www.tableau.com/learn/learning-paths/developer)
- [GitHub - utkarsh-yadav1231/Tableau-Projects: Learnt Data Visualization and Data Analytics with Tableau by solving 3 Realistic Analytics Projects.](https://github.com/utkarsh-yadav1231/Tableau-Projects)
- [Get Started - Tableau](https://help.tableau.com/current/pro/desktop/en-us/gettingstarted_overview.htm)
- [Tableau Dashboard Tutorial - Step by step, from start to finish - Part 1 | sqlbelle - YouTube](https://www.youtube.com/watch?v=cGa7QDeueTA)
- Payment Parter - [Digital Transformation Services & Solution \| Enterprise IT Solution](https://www.uneecops.com/)
- Future
	- [Tableau is falling behind and it's time to move on : r/tableau](https://www.reddit.com/r/tableau/comments/1c0t95s/tableau_is_falling_behind_and_its_time_to_move_on/)
	- [The Future of Tableau-Centric Roles: What’s Next for Data Professionals in the Next Five Years (per Deep Research)? \| by Adam Mico \| Bootcamp \| Medium](https://medium.com/design-bootcamp/the-future-of-tableau-centric-roles-whats-next-for-data-professionals-in-the-next-five-years-per-e48295af2eaf)
