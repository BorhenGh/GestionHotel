using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GestionHotelSahaBeach.Migrations
{
    /// <inheritdoc />
    public partial class iinitial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Chambre",
                columns: table => new
                {
                    idchambre = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumChambre = table.Column<int>(type: "int", nullable: false),
                    NbrePlaces = table.Column<int>(type: "int", nullable: false),
                    etat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    prix = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Chambre", x => x.idchambre);
                });

            migrationBuilder.CreateTable(
                name: "client",
                columns: table => new
                {
                    idclient = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nom = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Typespieces = table.Column<string>(name: "Types_pieces", type: "nvarchar(max)", nullable: true),
                    numPiece = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Adresse = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    télephone = table.Column<int>(type: "int", nullable: true),
                    datearrivee = table.Column<DateTime>(name: "date_arrivee", type: "datetime2", nullable: true),
                    datedepart = table.Column<DateTime>(name: "date_depart", type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_client", x => x.idclient);
                });

            migrationBuilder.CreateTable(
                name: "Questionresponse",
                columns: table => new
                {
                    idquestion = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    question = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    response = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questionresponse", x => x.idquestion);
                });

            migrationBuilder.CreateTable(
                name: "ReservationSalle",
                columns: table => new
                {
                    idresersalle = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Datereser = table.Column<DateTime>(name: "Date_reser", type: "datetime2", nullable: true),
                    Datearrivee = table.Column<DateTime>(name: "Date_arrivee", type: "datetime2", nullable: true),
                    Datedepart = table.Column<DateTime>(name: "Date_depart", type: "datetime2", nullable: true),
                    NombrePersonnes = table.Column<int>(type: "int", nullable: false),
                    idclient = table.Column<int>(type: "int", nullable: true),
                    idsalle = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReservationSalle", x => x.idresersalle);
                });

            migrationBuilder.CreateTable(
                name: "ReservationTab",
                columns: table => new
                {
                    idresertab = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Datereser = table.Column<DateTime>(name: "Date_reser", type: "datetime2", nullable: true),
                    Datearrivee = table.Column<DateTime>(name: "Date_arrivee", type: "datetime2", nullable: true),
                    Datedepart = table.Column<DateTime>(name: "Date_depart", type: "datetime2", nullable: true),
                    NombrePersonnes = table.Column<int>(type: "int", nullable: false),
                    idclient = table.Column<int>(type: "int", nullable: true),
                    idtable = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReservationTab", x => x.idresertab);
                });

            migrationBuilder.CreateTable(
                name: "ReservChambre",
                columns: table => new
                {
                    idreserCh = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Datereser = table.Column<DateTime>(name: "Date_reser", type: "datetime2", nullable: true),
                    Datearrivee = table.Column<DateTime>(name: "Date_arrivee", type: "datetime2", nullable: true),
                    Datedepart = table.Column<DateTime>(name: "Date_depart", type: "datetime2", nullable: true),
                    NombreAdultes = table.Column<int>(type: "int", nullable: false),
                    NombreEnfants = table.Column<int>(type: "int", nullable: false),
                    idclient = table.Column<int>(type: "int", nullable: true),
                    idchambre = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReservChambre", x => x.idreserCh);
                });

            migrationBuilder.CreateTable(
                name: "Salle",
                columns: table => new
                {
                    idsalle = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    etat = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    prix = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Salle", x => x.idsalle);
                });

            migrationBuilder.CreateTable(
                name: "Table",
                columns: table => new
                {
                    idtable = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumTable = table.Column<int>(type: "int", nullable: false),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    etat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    prix = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Table", x => x.idtable);
                });

            migrationBuilder.CreateTable(
                name: "Utilisateur",
                columns: table => new
                {
                    iduser = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    login = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    NomUser = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PrenomUser = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    roles = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Utilisateur", x => x.iduser);
                });

            migrationBuilder.CreateTable(
                name: "Facture",
                columns: table => new
                {
                    idfacture = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    datefacture = table.Column<DateTime>(name: "date_facture", type: "datetime2", nullable: true),
                    montant = table.Column<double>(type: "float", nullable: false),
                    idclient = table.Column<int>(type: "int", nullable: true),
                    clientidclient = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Facture", x => x.idfacture);
                    table.ForeignKey(
                        name: "FK_Facture_client_clientidclient",
                        column: x => x.clientidclient,
                        principalTable: "client",
                        principalColumn: "idclient");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Facture_clientidclient",
                table: "Facture",
                column: "clientidclient");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Chambre");

            migrationBuilder.DropTable(
                name: "Facture");

            migrationBuilder.DropTable(
                name: "Questionresponse");

            migrationBuilder.DropTable(
                name: "ReservationSalle");

            migrationBuilder.DropTable(
                name: "ReservationTab");

            migrationBuilder.DropTable(
                name: "ReservChambre");

            migrationBuilder.DropTable(
                name: "Salle");

            migrationBuilder.DropTable(
                name: "Table");

            migrationBuilder.DropTable(
                name: "Utilisateur");

            migrationBuilder.DropTable(
                name: "client");
        }
    }
}
