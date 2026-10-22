# UpstreamFix end-to-end test repository

Public test repository for the UpstreamFix Staging GitHub App. It contains a tiny Firebase Admin v13 project. A push to `main` sends a signed webhook to the staging App, whose dispatcher triggers **UpstreamFix API migrations** through `repository_dispatch`. The expected result is an `upstreamfix/firebase-admin-14` branch and a pull request for human review.

The client test fails if a workflow token or trap variable reaches its process. Nothing here is production code.
