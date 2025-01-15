import mongoose from 'mongoose';

export const mongodb = async (): Promise<void> => {
    try {
        const mongoURI: string | undefined = process.env.MONGODB_URI!;
        if(!mongoURI) {
            console.log("mongodb 환경변수가 설정되지 않았습니다.");
        }

        mongoose.set('strictQuery', false);  // 최신 Mongoose 설정 권장
        await mongoose.connect(mongoURI);
        
        const db: mongoose.Connection = mongoose.connection;
        console.log("mongodb 연결 성공");
        
        db.on('error', console.error.bind(console, 'mongodb 연결 실패 : '));
        db.once('open', () => {
          console.log('mongodb 연결 성공: once');
        });
    } catch(err){
        console.error("mongodb 접속 error : ", err);
        throw err;
    }
};