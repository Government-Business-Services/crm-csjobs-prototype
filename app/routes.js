//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here



router.post('/voldemort/self-serve/manual-recruitment-request/vacancy-details/budget-approval', function(request, response) {

    var liveInUK = request.session.data['mmrVacancyBudget']
    if (liveInUK == "Yes"){
        response.redirect("/voldemort/self-serve/manual-recruitment-request/vacancy-details/location")
    } else {
        response.redirect("/voldemort/self-serve/manual-recruitment-request/vacancy-details/request-not-complete")
    }
})



router.post('/voldemort/self-serve/manual-recruitment-request/vacancy-details/permanent-role', function(request, response) {

    var liveInUK = request.session.data['mmrVacancyPermanent']
    if (liveInUK == "Yes"){
        response.redirect("/voldemort/self-serve/manual-recruitment-request/vacancy-details/grade")
    } else {
        response.redirect("/voldemort/self-serve/manual-recruitment-request/vacancy-details/contract-type")
    }
})

router.post('/voldemort/self-serve/manual-recruitment-request/pre-employment-checks/', function(request, response) {

    var liveInUK = request.session.data['mmrPreChecks']
    if (liveInUK == "Yes"){
        response.redirect("/voldemort/self-serve/manual-recruitment-request/pre-employment-checks/reserved-status")
    } else {
        response.redirect("/voldemort/self-serve/manual-recruitment-request/check-your-answers")
    }
})




