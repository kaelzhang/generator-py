files = {{import_name}} test *.py
test_files = *

test:
	pytest -s -v test/test_$(test_files).py --doctest-modules --cov {{import_name}} --cov-config=.coveragerc --cov-report term-missing

lint:
	ruff check $(files)

fix:
	ruff check --fix $(files)

install:
	pip install -U -r requirements.txt -r dev-requirements.txt

install-all:
	pip install -U -r requirements.txt -r dev-requirements.txt -r docs/requirements.txt

report:
	codecov

build: {{import_name}}
	rm -rf dist
	python setup.py sdist bdist_wheel

publish:
	make build
	twine upload --config-file ~/.pypirc -r pypi dist/*

.PHONY: test build
