import React from 'react';

const Skill = () => {
    return (
        <div>
            <div>
                <h3 className="mb-3 text-2xl font-bold text-center">Our Skill</h3>
                <h6 className="w-1/2 mx-auto">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
            </div>
            <div className="w-1/2 mx-auto my-7">
            <div className="flex items-center justify-items-center">
                <h3 className="text-2xl font-semibold mr-5">Painter</h3>
                <progress className="progress progress-primary w-80 h-5" value="97" max="100"></progress>
                </div>
                <div className="flex items-center justify-items-center">
                <h3 className="text-2xl font-semibold mr-5">Electrician</h3>
                <progress className="progress progress-primary w-80 h-5" value="78" max="100"></progress>
                </div>
                <div className="flex items-center justify-items-center">
                <h3 className="text-2xl font-semibold mr-5">Plumber</h3>
                <progress className="progress progress-primary w-80 h-5" value="78" max="100"></progress>
                </div>
                <div className="flex items-center justify-items-center">
                <h3 className="text-2xl font-semibold mr-5">Fitter</h3>
                <progress className="progress progress-primary w-80 h-5" value="85" max="100"></progress>
                </div>
               
            </div>
        </div>
    );
};

export default Skill;