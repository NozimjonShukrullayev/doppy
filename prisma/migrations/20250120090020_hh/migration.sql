-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "answer",
DROP COLUMN "question",
DROP COLUMN "score",
DROP COLUMN "userAnswer",
ADD COLUMN     "improvementTip" TEXT,
ADD COLUMN     "questions" JSONB[],
ADD COLUMN     "quizScore" DOUBLE PRECISION NOT NULL;
