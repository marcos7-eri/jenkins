pipeline {
    agent any

    tools {
        // En Jenkins, configurar NodeJS Plugin con este mismo nombre y Node.js 22.
        nodejs 'NodeJS 22'
    }

    stages {
        stage('Obtener código') {
            steps {
                checkout scm
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Pruebas') {
            steps {
                sh 'npm test'
            }
        }
    }
}
