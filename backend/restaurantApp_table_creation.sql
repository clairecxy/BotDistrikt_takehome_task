CREATE TABLE MENU_ITEM  
(
    item_name VARCHAR(50) NOT NULL,
    price FLOAT NOT NULL,
    description VARCHAR(200),
    CONSTRAINT menu_item_pk PRIMARY KEY (item_name)
);

CREATE TABLE CUSTOMER   
(
    user_id INT NOT NULL,
    username VARCHAR(50) NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (user_id)
);

CREATE TABLE ORDERS
(
    order_id INT NOT NULL,
    user_id INT NOT NULL,
    total_bill FLOAT NOT NULL,
    CONSTRAINT order_pk PRIMARY KEY (order_id),
    CONSTRAINT order_fk FOREIGN KEY (user_id) REFERENCES CUSTOMER(user_id)
);

CREATE TABLE ORDERED_ITEMS
(
    item_name VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    order_id INT NOT NULL,
    CONSTRAINT ordered_items_pk PRIMARY KEY (item_name),
    CONSTRAINT ordered_items_fk1 FOREIGN KEY (item_name) REFERENCES MENU_ITEM(item_name),
    CONSTRAINT ordered_items_fk2 FOREIGN KEY (order_id) REFERENCES ORDERS(order_id)
);