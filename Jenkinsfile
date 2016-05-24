node {
  stage "source check out"
  checkout scm

  stage "build and test"




  stage "restart and deploy to tomcat"
  sh 'ssh ubuntu@ec2-54-213-251-190.us-west-2.compute.amazonaws.com "git clone https://github.com/nburk2/home_auto.git; cd home_auto; git checkout develop; npm install; gulp;sudo service apache2 stop; sudo rm -r /var/www/html/*; sudo mv dist/** /var/www/html;sudo service apache2 start;cd ..;sudo rm -rf home_auto"'

 stage "mail results"
 mail bcc: '', body: 'sending information', cc: '', charset: 'UTF-8', from: 'nate1113@comcast.net', mimeType: 'text/html', replyTo: '', subject: 'build report', to: 'nate1113@comcast.net'

}
