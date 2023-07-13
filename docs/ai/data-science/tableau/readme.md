# Tableau

- [Tableau Data Model](ai/data-science/tableau/tableau-data-model.md)
- [Augmented Analytics](ai/data-science/tableau/augmented-analytics.md)

Visualization from relational databases and data cubes, OLAP cubes, cloud databases

<https://www.datacamp.com/community/tutorials/tableau-visualizations-with-measure-names-and-measure-values>

<https://public.tableau.com/en-us/s>

<https://public.tableau.com/en-us/gallery/travel-planner-emissions-calculator>

## Debugging

Client-side redering - `:render=false`

### Configuration

TSM - Tableau Services Manager

cli client for server

```bash
tsm configuration list-dynamic-keys

tsm help

tsm configuration set -k vizportal.log.level -v debug
tsm configuration set -k vizqlserver.log.level -v debug

tsm configuration set -k vizportal.log.level -v info
tsm configuration set -k vizqlserver.log.level -v info
```

## REST APIs

[REST API and Resource Versions - Tableau](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm)

[Triggering extract refreshes for Tableau Server workbooks and data sources using the REST API | by Elliott Stam | Devyx | Medium](https://medium.com/snake-charmer-python-and-analytics/triggering-extract-refreshes-for-tableau-server-workbooks-and-data-sources-using-the-rest-api-d4a8b8c001bf)

## Resources

[tsm Command Line Reference - Tableau](https://help.tableau.com/current/server/en-us/tsm.htm)

[Developer Path | Extending Functionality | Tableau](https://www.tableau.com/learn/learning-paths/developer)

[GitHub - utkarsh-yadav1231/Tableau-Projects: Learnt Data Visualization and Data Analytics with Tableau by solving 3 Realistic Analytics Projects.](https://github.com/utkarsh-yadav1231/Tableau-Projects)
