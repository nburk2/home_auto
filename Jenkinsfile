node {
  stage "source check out"
  checkout scm

  stage "build and test"




  stage "move to dev directory"
  //scp -i ~/.ssh/id_rsa -r /Users/nburk/sp/home_auto/dist/* ubuntu@ec2-54-213-251-190.us-west-2.compute.amazonaws.com:~/home_automation

 stage "mail results"
 mail bcc: '', body: 'sending information', cc: '', charset: 'UTF-8', from: 'nate1113@comcast.net', mimeType: 'text/html', replyTo: '', subject: 'build report', to: 'nate1113@comcast.net'

}
