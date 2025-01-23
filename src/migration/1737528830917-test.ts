import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1737528830917 implements MigrationInterface {
    name = 'Test1737528830917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`music\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`artistId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`label\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`artist\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`label_artists_artist\` (\`labelId\` int NOT NULL, \`artistId\` int NOT NULL, INDEX \`IDX_7055749c426fbf5fa0c319cd22\` (\`labelId\`), INDEX \`IDX_eb67b08f46fd125071f104240a\` (\`artistId\`), PRIMARY KEY (\`labelId\`, \`artistId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`music\` ADD CONSTRAINT \`FK_8fdd0a21f58494eba65266a1e05\` FOREIGN KEY (\`artistId\`) REFERENCES \`artist\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`label_artists_artist\` ADD CONSTRAINT \`FK_7055749c426fbf5fa0c319cd225\` FOREIGN KEY (\`labelId\`) REFERENCES \`label\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`label_artists_artist\` ADD CONSTRAINT \`FK_eb67b08f46fd125071f104240ab\` FOREIGN KEY (\`artistId\`) REFERENCES \`artist\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`label_artists_artist\` DROP FOREIGN KEY \`FK_eb67b08f46fd125071f104240ab\``);
        await queryRunner.query(`ALTER TABLE \`label_artists_artist\` DROP FOREIGN KEY \`FK_7055749c426fbf5fa0c319cd225\``);
        await queryRunner.query(`ALTER TABLE \`music\` DROP FOREIGN KEY \`FK_8fdd0a21f58494eba65266a1e05\``);
        await queryRunner.query(`DROP INDEX \`IDX_eb67b08f46fd125071f104240a\` ON \`label_artists_artist\``);
        await queryRunner.query(`DROP INDEX \`IDX_7055749c426fbf5fa0c319cd22\` ON \`label_artists_artist\``);
        await queryRunner.query(`DROP TABLE \`label_artists_artist\``);
        await queryRunner.query(`DROP TABLE \`artist\``);
        await queryRunner.query(`DROP TABLE \`label\``);
        await queryRunner.query(`DROP TABLE \`music\``);
    }

}
