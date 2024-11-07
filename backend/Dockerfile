# Exemplo de Dockerfile para uma aplicação Spring Boot
# Para montar o arquivo .JAR é preciso ir para o diretorio do back e usar o comando mvn clean package
# Então para subir a imagem, o comando mvn spring-boot:build-image
FROM openjdk:17-jdk-slim
VOLUME /tmp
COPY target/dac-server-0.0.1-SNAPSHOT.jar app.jar   
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]