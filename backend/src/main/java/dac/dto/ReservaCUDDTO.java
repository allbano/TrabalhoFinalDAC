package dac.dto;

import java.time.LocalDate;

import dac.entity.ms_reserva.EstadoReservaCUD;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservaCUDDTO 
{
	private String cod;
	private EstadoReservaCUD estadoReserva;
	private String codVoo;
	private Long idCliente;
	private LocalDate data_hora;
}
