FROM openjdk:11
ADD ./target/spring-boot-websockets-1.0-SNAPSHOT.jar /usr/src/spring-boot-websockets-1.0-SNAPSHOT.jar
WORKDIR usr/src
EXPOSE 8080
ENTRYPOINT ["java","-jar","spring-boot-websockets-1.0-SNAPSHOT.jar"]

