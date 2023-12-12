export class Citas {

    id: number;
    date: string;
    hour: string;
    motive: string[];
    stated: string[];

    setStatus(status: string) {
        this.stated = [status];
    }

    setMotive(motivos: string) {
        this.motive = [motivos];
    }
}
