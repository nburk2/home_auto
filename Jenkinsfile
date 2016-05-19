node {
  stage "source check out"
  checkout scm

  stage "build and test"
    sh "exit"
    sh "cd home_automation"
    sh "rm temp.txt"


  stage "move to dev directory"
  //scp -i ~/.ssh/id_rsa -r /Users/nburk/sp/home_auto/* ubuntu@ec2-54-213-251-190.us-west-2.compute.amazonaws.com:~/home_automation/tomcat/webapps/ROOT

}
