.PHONY: setup
setup:
	yarn install

.PHONY: dev
dev:
	docker compose down || true
	docker network create react-redux || true
	docker compose up --build
