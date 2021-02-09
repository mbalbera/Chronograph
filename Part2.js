const store = {
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

// Return an object which maps report_ids to the total number of Pages in the Report.

function pagesPerReport() {
    let docs = {}
    let reports = {}
    let solution = {}
    Object.keys(store.page).forEach(page => {
        if (docs[page.document_id]) {
            docs[page.document_id] += 1
        } else {
            docs[page.document_id] = 1
        }
    })
    Object.keys(store.document).forEach(document => {
        if (reports[document.report_id]) {
            reports[document.report_id] += 1
        } else {
            reports[document.report_id] = 1
        }
    })
    Object.keys(store.report).forEach(report => {
        if (reports[report.id]) {
            solution[report.id] = reports[report.id]
        }
        else {
            solution[report.id] = 0
        }
    })
    return solution
}

// Please write a search function which accepts a string and returns a list of Reports. Any string field in our schema may contain relevant text matches, excluding Document.filetype.

function search1(searchTerm) {
    let docsWithTerm = []
    let reportsWithTerm = []
    let selectedReports = []
    docToRep = {}

    Object.keys(store.page).forEach(page => {
        if (page.body.includes(searchTerm) || page.footnote.includes(searchTerm)) {
            docsWithTerm.push(page.document_id)
        }
    })
    Object.keys(store.document).forEach(doc => {
        if (docsWithTerm.includes(doc.id) || doc.name.includes(searchTerm)) {
            reportsWithTerm.push(doc.report_id)
        }
    })
    Object.keys(store.report).forEach(rep => {
        if (reportsWithTerm.includes(rep.id) || rep.title.includes(searchTerm)) {
            selectedReports.push(rep.title)
        }
    })
    return selectedReports
}

function search2(searchTerm) {
    let docsWithTerm = []
    let reportsWithTerm = {}
    let selectedReports = []
    docToRep = {}
    Object.keys(store.document).forEach(doc => {
        if (docsWithTerm.includes(doc.id) || doc.name.includes(searchTerm)) {
            reportsWithTerm[doc.report_id] = true
        }
        else {
            docToRep[doc.id] = doc.report_id
        }
    })
    Object.keys(store.page).forEach(page => {
        if (docToRep[page.document_id] && (page.body.includes(searchTerm) || page.footnote.includes(searchTerm))) {
            let rep_id = docToRep[page.document_id]
            reportsWithTerm[rep_id] = true
        }
    })
    Object.keys(store.report).forEach(rep => {
        if (reportsWithTerm[rep.id] || rep.title.includes(searchTerm)) {
            selectedReports.push(rep.title)
        }
    })
    return selectedReports

}

// We've replaced your solution from part (2) with an asynchronous search function which loads its data from an API
    // Ignoring the body of the function how would its signature change? Feel free to propose mulitple options and demonstrate how the asynchronous function could be used to fetch search results.

    // If this were asynchronous then the entire shape of this function would be entirely different. 
    // I initially took a bottom up approach because it guarentees the correct answer and 0 duplicate passes over the dataset.
    // Next I improved upon my solution by using a middle out concept that has slightly better time complexity.
    // With an asynchronous you have the benefit of all 3 checks running simultanesously. Thus you can stop searching through a page once its document or report already has the search term. 
    // I would utilize an elastic search which checks at all levels of the search simultaneously and maintains the status of each search. 
    // This allows you find your result at a signifcantly faster pace.

    // If the asynchronous function can produce errors, how would those be handled? 

    // There are a handful of errors that arise using an elastic search, the most important when looking through a large data set would be any Timeout Error.
    // Using an elastic search you would be able to monitor how deep into the search you are and thus you can restart from where you timed out rather than starting that search from scratch.
    // The most important thing when dealing with an elastic search is that you have a strong understanding of what your search is doing at any given moment.  
    // So long as the initial data setup is done well and you index wherever possible.

