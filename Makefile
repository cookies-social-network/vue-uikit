up:
	docker compose -f docker-compose.yaml up -d
install:
	docker compose exec nodejs npm install
build:
	docker compose exec nodejs npm run build
shell:
	docker compose exec nodejs sh