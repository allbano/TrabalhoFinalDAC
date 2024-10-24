package dac.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import dac.dto.ReservaCUDDTO;
import dac.entity.ms_reserva.ReservaCUD;
import dac.entity.ms_reserva.LogReservaCUD;
import dac.repository.ReservaCUDRepository;

@CrossOrigin
@RestController
public class ReservaController {
	@Autowired
	ModelMapper mapper;
	@Autowired
	ReservaCUDRepository repoReserva;

	@GetMapping("/Reserva")
	public List<ReservaCUDDTO> buscarTodosReservas() {
		List<ReservaCUD> buscarReservas = repoReserva.findAll();
		List<ReservaCUDDTO> lista = new ArrayList<>();

		for (ReservaCUD Reserva : buscarReservas)
			lista.add(mapper.map(Reserva, ReservaCUDDTO.class));

		return lista;
	}

	@GetMapping("/Reserva/{id}")
	public ReservaCUDDTO buscarReserva(@PathVariable String id) {
		Optional<ReservaCUD> buscarReserva = repoReserva.findById(id);

		if (buscarReserva.isEmpty())
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe Reserva com esse Código!");

		return mapper.map(buscarReserva.get(), ReservaCUDDTO.class);
	}

	@SuppressWarnings("null")
	@PostMapping("/Reserva")
	public ResponseEntity<ReservaCUDDTO> criarReserva(@RequestBody ReservaCUDDTO ReservaRecebido) {

		// Validar se o Reserva já existe - caso precise verificar

		// Realizar requisição para microsserviço que cria um usuário e retorna o id

		ReservaCUD novoReserva = mapper.map(ReservaRecebido, ReservaCUD.class);

		novoReserva = repoReserva.save(novoReserva);

		return ResponseEntity.created(null).body(mapper.map(novoReserva, ReservaCUDDTO.class));
	}

	@PutMapping("/Reserva/{id}")
	public ReservaCUDDTO atualizarReserva(@PathVariable String id, @RequestBody ReservaCUDDTO ReservaRecebido) {
		// Validar Reserva atualizado

		Optional<ReservaCUD> buscarReserva = repoReserva.findById(id);

		if (buscarReserva.isEmpty())
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe Reserva com esse id!");

		buscarReserva.get().setCod(ReservaRecebido.getCod());
		buscarReserva.get().setDataHora(ReservaRecebido.getData_hora());
		buscarReserva.get().setEstadoReserva(ReservaRecebido.getEstadoReserva());
		buscarReserva.get().setCodVoo(ReservaRecebido.getCodVoo());
		buscarReserva.get().setIdCliente(ReservaRecebido.getIdCliente());

		return mapper.map(repoReserva.save(buscarReserva.get()), ReservaCUDDTO.class);
	}

	@DeleteMapping("/Reserva/{id}")
	public ReservaCUDDTO removerReserva(@PathVariable String id) {
		Optional<ReservaCUD> buscarReserva = repoReserva.findById(id);

		if (buscarReserva.isEmpty())
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe Reserva com esse id!");

		return mapper.map(repoReserva.save(buscarReserva.get()), ReservaCUDDTO.class);
	}
}
