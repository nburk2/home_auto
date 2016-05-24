node {
  stage "source check out"
  checkout scm

  stage "build and test"




  stage "move to dev directory"
  //scp -i ~/.ssh/id_rsa -r /Users/nburk/sp/home_auto/dist/* ubuntu@ec2-54-213-251-190.us-west-2.compute.amazonaws.com:~/home_automation

 stage "mail results"
 mail (to: 'nate1113@comcast.net',
          subject: "Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) is waiting for input",
          body: "Please go to ${env.BUILD_URL}.");

}
