# Soluntech QA Engineer Technical Test

### 1. Test case design (test_suite folder)
A test suite was created with test cases for the following scenarios:
- Create Account
- Forgot password
- Login Organization
- Login Player
- Login with wrong credentials
- Send player invitation

### 2. Bug report (bug_reports folder)
Report of 5 issues on the website https://armcareqaweb.soluntech.com/login

### 3. Automation (automation folder)
Automation of test cases created in step 1, using Cypress 12 + POM. 
Additionally, cypress-mochawesome-reporter is used to generate an HTML report.

---

### Installation

Clone the repository

Install the dependencies using the command: npm install

### Usage

To open the Cypress Test Runner, use the command: npm run cy:open

### Dependencies

Cypress: ^12.8.1

cypress-mochawesome-reporter: ^3.3.0

### Dev Dependencies

cypress-iframe: ^1.0.1

mocha: ^10.2.0

---

The test data was added as Cypress variables because it involves sensitive information such as passwords and payment information. 

Therefore, in practice, these variables would be empty and the data would be passed through the console at the time of execution or loaded directly into the continuous integration.
