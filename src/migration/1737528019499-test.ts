import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1737528019499 implements MigrationInterface {
    name = 'Test1737528019499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`music\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`length\` int NOT NULL, \`image\` varchar(255) NULL, \`tag\` enum ('jpop', 'rock', 'edm') NOT NULL DEFAULT 'jpop', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`music\``);
    }

}
