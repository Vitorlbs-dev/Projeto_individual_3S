package school.sptech.backend_projeto;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/automoveis")
public class CatalogoController {
    @Autowired
    private final JdbcTemplate jdbcTemplate;

    public CatalogoController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping
    public ResponseEntity<List<Automovel>>listarAutooveis(){

        String sql = "SELECT * FROM automovel";
        List<Automovel>veiculos = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Automovel.class));

        if (veiculos.isEmpty()){
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(veiculos);
    }

    @PostMapping
    public ResponseEntity<Automovel>cadastroVeiculo(@RequestBody Automovel veiculo){
        if (
                veiculo.getAno() == null ||
                        veiculo.getCor() == null ||
                        veiculo.getMarca() == null ||
                        veiculo.getModelo() == null ||
                        veiculo.getPreco() == null ||
                        veiculo.getQuilometragem() == null ||
                        veiculo.getPreco() <= 0 ||
                        veiculo.getQuilometragem() < 0 ||
                        veiculo.getModelo().isBlank() ||
                        veiculo.getMarca().isBlank() ||
                        veiculo.getCor().isBlank() ||
                        veiculo.getAno() < 1980 ||
                        veiculo.getAno() > 2026
        ){
            return ResponseEntity.status(400).build();
        }

        String existe =  "SELECT COUNT(*) FROM automovel WHERE marca = ? AND modelo = ? AND  ano = ? AND  cor = ? AND  preco = ? AND quilometragem = ? ";

        Integer conte = jdbcTemplate.queryForObject(existe, Integer.class,
                veiculo.getMarca(),
                veiculo.getModelo(),
                veiculo.getAno(),
                veiculo.getCor(),
                veiculo.getPreco(),
                veiculo.getQuilometragem());

        if (conte > 0){
            return ResponseEntity.status(409).build();
        }

        String sql = "INSERT INTO automovel (marca, modelo, ano, cor, preco, quilometragem) VALUES (?, ?, ?, ?, ?, ?) ";
        jdbcTemplate.update(sql,
                veiculo.getMarca(),
                veiculo.getModelo(),
                veiculo.getAno(),
                veiculo.getCor(),
                veiculo.getPreco(),
                veiculo.getQuilometragem());

         return ResponseEntity.status(201).body(veiculo);
    }
}
