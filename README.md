# playwright-aws-demo
AWS Cloud pipeline for Playwright testing
# 🧪 Cloud-Based Playwright Test Automation with AWS

This project demonstrates how to **run Playwright tests in a cloud-native CI/CD pipeline** using:

🚀 **Technologies Used**
- **GitHub** – Source code & GitHub Actions trigger
- **Docker** – Containerized Playwright test environment
- **AWS ECR** – Docker image hosting
- **AWS CodeBuild** – Cloud test execution
- **AWS CodePipeline** – Orchestrates the CI/CD flow

---

## 🔄 Workflow Overview

1. On every code push or pull request:
2. GitHub Actions triggers the pipeline
3. Docker image with tests is built and pushed to **Amazon ECR**
4. **CodeBuild** pulls the image and runs `npx playwright test`
5. Test reports (HTML) are saved as artifacts
6. Everything runs **100% on AWS** – no local setup needed

---

## 💡 Real-World Use Case

This pipeline helps teams:
- Automate browser tests reliably at scale
- Run tests in consistent, production-like environments
- Avoid "it works on my machine" problems
- Enable fast, confident, and repeatable deployments

---

## 📊 Test Reporting

🎯 Test results are uploaded to CodeBuild artifacts (`playwright-report/`)  
📁 You can view full interactive HTML test reports in AWS Console.

---

## 🙌 Show Support

If you found this project helpful or inspiring, please:

⭐️ Star this repo  
👁️‍🗨️ Watch for updates  
🔗 [Follow me on GitHub](https://github.com/trunali10)

Let’s connect and grow together in the world of DevOps & Test Automation!

---

Made with ❤️ by [Trunali Wagh](https://github.com/trunali10)  
#playwright #aws #codebuild #docker #testautomation #qa #cicd #opensource
