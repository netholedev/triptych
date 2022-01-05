
docker exec -it triptych-v2_devcontainer_arangodb_1 /bin/sh
arangodump backup --all-databases true --output-directory geobackup --compress-output

docker cp triptych-v2_devcontainer_arangodb_1:backup geo-backup