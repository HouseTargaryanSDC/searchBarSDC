mongoimport -d tableitSDC -c cities --type csv --file '/Users/daniellin215/Desktop/searchBarSDC/database/csv/cities.csv' --fields "id,cities";
mongoimport -d tableitSDC -c restaurants --type csv --file '/Users/daniellin215/Desktop/searchBarSDC/database/csv/restaurants.csv' --fields "id,restaurants";
mongoimport -d tableitSDC -c cuisines --type csv --file '/Users/daniellin215/Desktop/searchBarSDC/database/csv/cuisines.csv' --fields "id,cuisines";