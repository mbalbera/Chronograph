# Chronograph Case Study

This was a case study to showcase both front-end and back-end skill sets.

## Part 1

Part one tested my SQL and database knowledge.

1. Write a SQL query to find the ids of all documents which do not have any pages.
2. Write a SQL query which returns a list of report titles and the total number of pages in the report. Reports which do not have pages may be ignored.
3. Assume a new feature needs to be developed to allow commenting on reports, documents, and pages.How would you implement support for this in the schema, and what considerations would you have in determining your approach ?


## Part 2

Part two tested my front-end JS know-how using the following data store.

```
store = {
    document: {
        8: { id: 8, report_id: 4, name: 'Sample Document', filetype: 'txt' },
        34: { id: 34, report_id: 21, name: 'Quarterly Report', filetype: 'pdf' },
        87: { id: 87, report_id: 21, name: 'Performance Summary', filetype: 'pdf' },
    },
    page: {
        19: { id: 19, document_id: 34, body: 'Lorem ipsum...', footnote: null },
        72: { id: 72, document_id: 87, body: 'Ut aliquet...', footnote: 'Aliquam erat...' },
        205: { id: 205, document_id: 34, body: 'Donec a dui et...', footnote: null },
    },
    report: {
        4: { id: 4, title: 'Sample Report' },
        21: { id: 21, title: 'Portfolio Summary 2020' },
    },
}
```

1. Return an object which maps report_ids to the total number of Pages in the Report.
2. Please write a search function which accepts a string and returns a list of Reports. Any string field in our schema may contain relevant text matches, excluding Document.filetype.
3. We've replaced your solution from part (2) with an asynchronous search function which loads its data from an API. Ignoring the body of the function how would its signature change? Feel free to propose mulitple options and demonstrate how the asynchronous function could be used to fetch search results.
