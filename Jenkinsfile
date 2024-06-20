// pipeline {
//     agent any
    
//     stages {
//         stage('SCM Checkout') {
//             steps {
//                 retry(3) {
//                     git branch: 'main', url: 'https://github.com/bawantha395/InstituteManagementSystem_4162'
//                 }
//             }
//         }
//         stage('Build Docker Images') {
//             steps {
//                 sh 'docker build -t bawantha395/institutemanagementsystem-frontend:${BUILD_NUMBER} frontend'
//                 sh 'docker build -t bawantha395/institutemanagementsystem-backend:${BUILD_NUMBER} backend'
//             }
//         }
//         stage('Login to Docker Hub') {
//             steps {
//                 withCredentials([string(credentialsId: 'mern-dockerhubpassword', variable: 'mern-dockerhubpass')]) {
//                     script {  
//                         sh "docker login -u bawantha395 -p '${mern-dockerhubpass}'"
//                     }
//                 }
//             }
//         }
//         stage('Deploy with Docker Compose') {
//             steps {
//                 script {
//                     sh 'docker-compose up -d'
//                 }
//             }
//         }
//     }
//     post {
//         always {
//             sh 'docker logout'
//         }
//     }
// }

pipeline {
    agent any
    
    stages {
        stage('SCM Checkout') {
            steps {
                retry(10) {
                    git branch: 'main', url: 'https://github.com/bawantha395/InstituteManagementSystem_4162'
                }
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t bawantha395/institutemanagementsystem-frontend:${BUILD_NUMBER} frontend'
                sh 'docker build -t bawantha395/institutemanagementsystem-backend:${BUILD_NUMBER} backend'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'mern-dockerhubpassword', variable: 'DOCKERHUB_PASS')]) {
                    script {  
                        sh "echo '${DOCKERHUB_PASS}' | docker login -u bawantha395 --password-stdin"
                    }
                }
            }
        }
        stage('Push Docker Images') {
            steps {
                sh 'docker push bawantha395/institutemanagementsystem-frontend:${BUILD_NUMBER}'
                sh 'docker push bawantha395/institutemanagementsystem-backend:${BUILD_NUMBER}'
            }
        }
        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
