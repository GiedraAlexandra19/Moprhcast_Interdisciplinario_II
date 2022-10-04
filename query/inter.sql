create database inter;
use inter;

create table usuario(
	cui integer primary key unique not null,
    contrasenha char(30) not null
);

/*drop table emocion;*/
create table emocion(
	idemocion integer primary key,
    idcui integer,
    frecuencia integer,
    descripcion set("angry",
					"disgust",
					"fear",
					"happy",
					"neutral",
					"sad",
					"sorprise"),
    foreign key(idcui) references usuario(cui)
);

/*Procedimientos almacenados
- para actualizar emociones
- crear usuario
- emocion predominante, frecuencia mayor funcion
angry: 1
disgust: 2
fear:3
happy:4
neutral:5
sad:6
sorprise:7
*/

/*Procedimientos almacenados*/
/*drop procedure insertar_usuario;*/
Delimiter $$
create procedure insertar_usuario(
in idcui integer,
in contrasenha varchar(30))
begin
	if (select exists (select 1 from usuario where usuario.cui = idcui))then
		select 'Ya existe usuario!';
    else 
		insert into usuario values(idcui,contrasenha);
	end if;
end$$
Delimiter ;

/*drop procedure insertar_emocion;*/
Delimiter $$
create procedure insertar_emocion(
in id integer,
in cui integer,
in dato integer)
begin
        if dato = 1 then
			insert into emocion values(id,cui,dato,"angry");
		elseif(dato=2)then
			insert into emocion values(id,cui,dato,"disgust");
		elseif(dato=3)then
			insert into emocion values(id,cui,dato,"fear");
		elseif(dato=4)then
			insert into emocion values(id,cui,dato,"happy");
		elseif(dato=5)then
			insert into emocion values(id,cui,dato,"neutral");
		elseif(dato=6)then
			insert into emocion values(id,cui,dato,"sad");
		elseif(dato=7)then
			insert into emocion values(id,cui,dato,"sorprise");
		end if;
end$$
Delimiter ;

/*drop procedure actualizar_emocion;*/
Delimiter $$
create procedure actualizar_emocion(
in cui integer,
in dato integer)
begin
	if (dato = 1)then
		update emocion set frecuencia = dato, descripcion="angry" where idcui = cui;
	elseif(dato=2)then
		update emocion set frecuencia = dato, descripcion="disgust" where idcui = cui;
	elseif(dato=3)then
		update emocion set frecuencia = dato, descripcion="fear" where idcui = cui;
	elseif(dato=4)then
		update emocion set frecuencia = dato, descripcion="happy" where idcui = cui;
	elseif(dato=5)then
		update emocion set frecuencia = dato, descripcion="neutral" where idcui = cui;
	elseif(dato=6)then
		update emocion set frecuencia = dato, descripcion="sad" where idcui = cui;
	elseif(dato=7)then
		update emocion set frecuencia = dato, descripcion="sorprise" where idcui = cui;
	end if;
end$$
Delimiter ;

/*Funciones*/
DELIMITER $$
create function frecuencia(id integer) returns int deterministic
begin
	declare f integer;
    set f = (select emocion.frecuencia from emocion where emocion.idcui = id);
    return f;
end;
$$
DELIMITER ;

/*Insertar datos*/
select * from usuario;
select * from emocion;
call insertar_usuario(20200730,"admin123");
call insertar_usuario(20200731,"admin123");
call insertar_usuario(20200732,"admin123");
call insertar_usuario(20200730,"admin123");

call insertar_emocion(20200730,20200730,2);
call insertar_emocion(20200735,2);

call actualizar_emocion(20200730,5);
call actualizar_emocion(20200731,1);

select frecuencia(20200730);
