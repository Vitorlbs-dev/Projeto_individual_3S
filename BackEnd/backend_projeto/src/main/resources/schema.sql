CREATE TABLE automovel (
        id INT PRIMARY KEY AUTO_INCREMENT,
        marca VARCHAR(50) NOT NULL,
        modelo VARCHAR(100) NOT NULL,
        ano INT NOT NULL,
        cor VARCHAR(30) NOT NULL,
        preco DECIMAL(10,2) NOT NULL,
        quilometragem INT NOT NULL
);