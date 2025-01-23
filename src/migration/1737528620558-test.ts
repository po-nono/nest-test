import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1737528620558 implements MigrationInterface {
    name = 'Test1737528620558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`music\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`artistId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`artist\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`music\` ADD CONSTRAINT \`FK_8fdd0a21f58494eba65266a1e05\` FOREIGN KEY (\`artistId\`) REFERENCES \`artist\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`music\` DROP FOREIGN KEY \`FK_8fdd0a21f58494eba65266a1e05\``);
        await queryRunner.query(`DROP TABLE \`artist\``);
        await queryRunner.query(`DROP TABLE \`music\``);
    }

}
