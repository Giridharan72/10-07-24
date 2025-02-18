const { Bus } = require('../db/bus');


const addReview = async (req, res, next) => {
  try {
    const { busId } = req.params;
    const { rating, content } = req.body;

    const review = {
      rating,
      content,
    };

    const bus = await Bus.findByPk(busId);

    if (!bus) {
      return res.status(404).json({ success: false, message: 'Bus not found' });
    }

    await bus.update({
      reviews: [...bus.reviews, review]
    });

    return res.status(200).json({
      success: true,
      message: 'Review added successfully.',
      data: {
        bus,
      },
    });
  } catch (err) {
    next(err);
  }
};

// Get reviews of a bus record
const getReview = async (req, res, next) => {
  try {
    const { busId } = req.params;

    const bus = await Bus.findByPk(busId, {
      attributes: ['reviews'], 
    });

    if (!bus) {
      return res.status(404).json({ success: false, message: 'Bus not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Reviews fetched successfully.',
      data: {
        reviews: bus.reviews,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addReview,
  getReview
};
