node {
  stage "source check out"
  checkout scm

  stage "build and test"
  //boolean testPassed = true
    //try {
        //sh "./gradlew build"
      //} catch(e) {
        //testPassed = false
        //println "build failed " + e
      //}


  //stage "restart and deploy to tomcat"
  sh 'ssh ubuntu@ec2-54-213-251-190.us-west-2.compute.amazonaws.com "git clone https://github.com/nburk2/home_auto.git; cd home_auto; git checkout develop; npm install; gulp;sudo service apache2 stop; sudo rm -r /var/www/html/*; sudo mv dist/** /var/www/html;sudo service apache2 start;cd ..;sudo rm -rf home_auto"'
  //sh 'ssh ubuntu@ec2-54-213-251-190.us-west-2.compute.amazonaws.com "./bin/home_staging_deploy"'

 //stage "mail results"
 //mail bcc: '', body: 'sending information', cc: '', charset: 'UTF-8', from: 'nate1113@comcast.net', mimeType: 'text/html', replyTo: '', subject: 'build report', to: 'nate1113@comcast.net'

 //stage "sending slack notification"
 //withCredentials([[$class: 'StringBinding', credentialsId: '3499ec53-575f-472d-b377-8938e4e53329', variable: 'SLACK_TOKEN']]) {
    //slackSend failOnError: true, channel: '#jenkins_temp', message: 'Successful build of ' + env.JOB_NAME + ' job', teamDomain: 'ctac', token: env.SLACK_TOKEN
//}


}
