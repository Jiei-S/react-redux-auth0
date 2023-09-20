.PHONY: setup
setup:
	yarn install
	cp .env .env.local

.PHONY: dev
dev:
	docker compose down || true
	docker network create react-redux || true
	docker compose up --build
