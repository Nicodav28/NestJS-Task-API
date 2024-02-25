import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import MongooseDelete from 'mongoose-delete';

@Schema({
    timestamps: true
})
 
class Task{
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    title: string;

    @Prop({
        required: true,
        trim: true
    })
    description: string;

    @Prop({
        required: true,
        trim: true,
        uppercase: true,
        enum: ['LOW', 'MEDIUM', 'HIGH']
    })
    priority: string;
    
    @Prop({
        required: true,
        trim: true,
        uppercase: true,
        enum: ['PENDING', 'IN_PROGRESS', 'DONE']
    })
    status: string;
}

const TaskSchema = SchemaFactory.createForClass(Task);

export { TaskSchema, Task }