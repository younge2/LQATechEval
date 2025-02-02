# Technical Evaluation
Objective: Create a Playwright-driven test suite that leverages data-driven techniques to minimize code duplication and improve scalability. By driving test scenarios from a JSON object, we can dynamically adapt each test case without repeating code, ensuring a clean and maintainable structure as new cases are added.

## IMPORTANT NOTE
This project is meant to have user credentials stored in a .env file which is not included in the git repo. Ensure correct credentials are stored in a .env file with the below env var names:
```
admin_username="<Secret_Username>"
admin_password="<Secret_Password>"
```
