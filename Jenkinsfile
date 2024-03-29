pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'avocado-markdown' // Name for your Docker image
        ARTIFACTORY_SERVER_ID = 'artifactory1' // ID of the Artifactory server configured in Jenkins
        DOCKER_REGISTRY = 'docker-trial' // Name of the Docker repository in Artifactory
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    docker.build(env.DOCKER_IMAGE)
                }
            }
        }

        stage('Push to Artifactory') {
            steps {
                script {
                    // Push Docker image to Artifactory
                    def server = Artifactory.server env.ARTIFACTORY_SERVER_ID
                    server.publish "${env.DOCKER_IMAGE}:latest", '', env.DOCKER_REGISTRY
                }
            }
        }
    }
}
