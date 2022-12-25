import mongoose from "mongoose";

const Jsons = new mongoose.Schema({
    end_year: {
        type: Number
    },
    intensity: {
        type: Number
    },
    sector: {
        type: String
    },
    topic: {
        type: String
    },
    insight: {
        type: String
    },
    url: {
        type: String
    },
    region: {
        type: String
    },
    start_year: {
        type: Number
    },
    impact: {
        type: String
    },
    added: {
        type: String
    },
    published: {
        type: String
    },
    country: {
        type: String
    },
    relevance: {
        type: String
    },
    pestle: {
        type: String
    },
    source: {
        type: String
    },
    title: {
        type: String
    },
    likelihood: {
        type: Number
    },
})

const m = mongoose.model('Jsons', Jsons)
export default m;