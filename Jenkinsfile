pipeline {
    agent any
    tools { nodejs "nodejs" }
    stages {
        stage('build') {
            steps {
                 checkout scm
                sh 'pwd'
                echo GIT_BRANCH
               script {
                    if(env.GIT_BRANCH == "origin/main") {
                          sshPublisher(publishers: [sshPublisherDesc(configName: 'daniyal-ec2', transfers: [sshTransfer(execCommand: "npm install; wget -qO- https://getpm2.com/install.sh | bash; pm2 stop server; pm2 start server.js",sourceFiles: 'server.js')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                            echo 'I only execute on the master branch'
                    } else {
                         sshPublisher(publishers: [sshPublisherDesc(configName: 'daniyal-dev', transfers: [sshTransfer(execCommand: "npm install; wget -qO- https://getpm2.com/install.sh | bash; pm2 stop server; pm2 start server.js",sourceFiles: 'server.js')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                        echo 'I execute elsewhere other than main'
                        sh 'cat /var/lib/jenkins/workspace/node-declarative/server.js'
                    }
                }
                }
            }
        }
    post {
        success {
        slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
        failure {
        slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
  }
}