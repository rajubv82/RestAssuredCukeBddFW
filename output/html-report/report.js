$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Demo1.feature");
formatter.feature({
  "name": "Validating Submit Reservation pass through API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify User is able to do the reservation- BookingPal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "submit reservation payload with \"\u003cconfirmation_code\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"submitReservationAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "confirmation_code"
      ]
    },
    {
      "cells": [
        "1600437483043"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify User is able to do the reservation- BookingPal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "submit reservation payload with \"1600437483043\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.add_Place_Payload_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"submitReservationAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinations.StepDefination.the_API_call_got_success_with_status_code(StepDefination.java:46)\r\n\tat ✽.the API call got success with status code 200(file:src/test/java/features/Demo1.feature:6)\r\n",
  "status": "failed"
});
});