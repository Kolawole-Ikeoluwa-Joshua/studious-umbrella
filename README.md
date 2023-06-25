# Studious Umbrella (A mini microservice blog)

lightweight-microservice blog application using React and Nodejs


# Getting Started

This project uses [Nodejs](https://nodejs.org/en/docs) and [React](https://react.dev/learn).

## Available Scripts

In the following project directories, you can run:


### Services

* client
* comments
* event-bus
* moderation
* posts
* query


```
npm start
```


### Running Services with Docker

Run these commands in respective service terminals:

* Buid an image based on the dockerfile in the current directory

```
docker build -t <docker-id>/posts .
```

* Create and start a container based on the provided image id or tag
```
docker run [image id or image tag]
```

* Create and start container, but also override the default command
```
docker run -it [image id or image tag] [cmd]
```

* Print out information about all of the running containers
```
docker ps
```

* Execute the given command in a running container
```
docker exec -it [container id] [cmd]
```

* Print out logs from the given container
```
docker logs [container id]
```


### Orchestrating Services with K8s

#### setup
Install kubernetes on your local machine. If using windows - Docker Desktop has made this easy

After installation confirm your K8s version with this command:

```
kubectl version -output=json
```

#### create a pod
* use the `posts.yaml` configuration file found in `infrastructure/k8s` directory
```
kubectl apply -f posts.yaml

kubectl get pods

kubectl delete pod <pod_name>
```
#### create a deployment
* use the `posts-depl.yaml` file

```
kubectl apply -f posts-depl.yaml
```

explore deployments using these commands:
```
kubectl get deployments

kubectl get pods

kubectl delete pod <pod_id>

kubectl describe deployment

kubectl delete deployment <deployment_name>
```