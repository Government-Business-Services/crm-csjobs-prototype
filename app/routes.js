//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Budget Approval
router.post('/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/budget-approval', function(request, response) {

    var mmrVacancyBudget = request.session.data['mmrVacancyBudget']
    if (mmrVacancyBudget == "Yes"){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/location")
    } else {
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/request-not-complete")
    }
})


// Permanent Role
router.post('/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/permanent-role', function(request, response) {

    var mmrVacancyPermanent = request.session.data['mmrVacancyPermanent']
    if (mmrVacancyPermanent == "Yes"){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/grade")
    } else {
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/contract-type")
    }
})

// Re-employment checks
router.post('/field-of-dreams/self-serve/manual-recruitment-request/pre-employment-checks/', function(request, response) {

    var mmrPreChecks = request.session.data['mmrPreChecks']
    if (mmrPreChecks == "Yes"){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/pre-employment-checks/reserved-status")
    } else {
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/check-your-answers")
    }
})




