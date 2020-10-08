pipeline {
    agent {label 'fleet-slave'}
   tools {
	nodejs 'nodejs' 
}
    stages {
        
        stage('build') {
          
            steps {
                 checkout scm
                sh 'pwd'
                sh 'node -v'
                sh 'npm -v'
                echo GIT_BRANCH
               script {
                    if(env.GIT_BRANCH == "origin/main") {
                          sshPublisher(publishers: [sshPublisherDesc(configName: 'daniyal-ec2', transfers: [sshTransfer(execCommand: "nvm install; wget -qO- https://getpm2.com/install.sh | bash; pm2 stop server; pm2 start server.js",sourceFiles: '**/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                            echo 'I only execute on the master branch'
                    } else {
                         sshPublisher(publishers: [sshPublisherDesc(configName: 'daniyal-develop', transfers: [sshTransfer(execCommand: "nvm install; wget -qO- https://getpm2.com/install.sh | bash; pm2 stop server; pm2 start server.js",sourceFiles: '**/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                        echo 'I execute elsewhere other than main '
                        sh 'cat server.js'
                    }
                }
                }
            }
        }
}
