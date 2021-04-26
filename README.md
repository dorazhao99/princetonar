<h1 align="center">
  Princeton AR Project
</h1>

##  Overview
This is the website portion of the Princeton AR Project, initially built in the Spring of 2021 for the course SOC 414 / COS 415. The website is built using Gatsby and Mapbox. It is currently deployed to https://princeton-ar.herokuapp.com. 

## Requirements
* Gatsby
* Mapbox API Token -- store the Mapbox API token in a ```.env``` file under the environment variable name ```MAPBOX```. 

## Commands

After downloading Gatsby CLI, start developing the website by using the following command. The site will be running at http://localhost:8000.

```shell
    gatsby develop
```

To deploy the website to Heroku, use the following command. This will deploy the website to https://princeton-ar.herokuapp.com. 
```shell
    git push origin main
```

## Structure
The code for the project is stored in the ```src``` folder. The file structure is as follows:
* ```/components```: Contains the different components (e.g. header, buttons, etc.) that can be used in ```/pages```.
* ```/images```: Contains any static images used on the website.
* ```/markdown-pages```: Contains the content for the Markdown pages under the Resource tab of the website. 
* ```/pages```: Contains the code for the pages of the website. 
* ```/templates```: Contains the template for the blog component (e.g. the Markdown pages). 
