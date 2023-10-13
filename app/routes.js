//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Budget Approval

router.post('/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/location', function(request, response) {

    var mmrVacancyBudget = request.session.data['mmrVacancyBudget']
    if (mmrVacancyBudget == "Yes"){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/location")
    }  else {
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/request-not-complete")    
    } 
})


// Permanent Role
router.post('/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/pattern', function(request, response) {

    var mmrVacancyPermanent = request.session.data['mmrVacancyPermanent']
    var mmrVacancyContractType = request.session.data['mmrVacancyContractType']

    if (mmrVacancyContractType != ""){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/pattern")
    } else if (mmrVacancyPermanent == "Yes"){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/pattern")
    } else if (mmrVacancyPermanent == "No"){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/vacancy-details/contract-type")
    }
})

// Re-employment checks
router.post('/field-of-dreams/self-serve/manual-recruitment-request/pre-employment-checks/reserved-status', function(request, response) {

    var mmrPreChecks = request.session.data['mmrPreChecks']
    if (mmrPreChecks == "Yes"){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/pre-employment-checks/reserved-status")
    } else {
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/check-your-answers")
    }
})


// Working with children
router.post('/field-of-dreams/self-serve/manual-recruitment-request/pre-employment-checks/enhanced/home-address', function(request, response) {

    var mmrPreChecksRegulatedActivity = request.session.data['mmrPreChecksRegulatedActivity']
    var mmrPreChecksChildren = request.session.data['mmrPreChecksChildren']

    if (mmrPreChecksRegulatedActivity == "Yes"){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/pre-employment-checks/enhanced/home-address")
    } else if (mmrPreChecksChildren == "Yes"){
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/pre-employment-checks/enhanced/home-address")
    } else {
        response.redirect("/field-of-dreams/self-serve/manual-recruitment-request/check-your-answers")
    }
})







  