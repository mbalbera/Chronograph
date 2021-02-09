// A Report has many Documents
// A Documents has many Pages
// A Report has many Pages through Documents


//Write a SQL query to find the ids of all documents which do not have any pages.
const One = `
   SELECT d.id 
   FROM Document d 
   LEFT JOIN Page p 
   ON d.id = p.document_id 
   WHERE p.document_id IS NULL
`


// Write a SQL query which returns a list of report titles and the total number of pages in the report.Reports which do not have pages may be ignored.
const Two = `
    Select r.title count(p.id)
    From report as r
    Join document as d
    On r.id = d.report_id
    Join page as p
    On d.id = p.document_id
    Group by r.title
`
//Assume a new feature needs to be developed to allow commenting on reports, documents, and pages.How would you implement support for this in the schema, and what considerations would you have in determining your approach ?
const Three = `
    In order to allow for commenting on any of the three tables I would create a new table. With the following columns: 
     - id (integer)
     - report_id (integer)
     - document_id (integer)
     - page_id (integer)
     - title (string)
     - comment (text)
     
     In a practical setting I would consider adding columns to better organize the table
     - company_id (integer) -> this would allow you to easily filter by company
     - priority (integer) -> this would allow you to sort by what comments are most important


     The reason I would take this approach is because it would continue to work for as many other tables as possible. If we were to make individual tables for every model we wanted to comment we would have to make endless tables which is not scalable. 
`